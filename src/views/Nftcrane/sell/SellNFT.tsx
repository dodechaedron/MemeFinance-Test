import React, {
  useEffect,
  useState,
} from 'react'

import axios from 'axios'
import BigNumber from 'bignumber.js'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  getDNFTcraneAddress,
  getNftStakingcraneAddress,
} from 'utils/addressHelpers'
import {
  getDNFTcraneContract,
  getNftStakingContract,
} from 'utils/contractHelpers'

import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  useModal,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'

import StakingModal from '../staking/StakingModal'

const StyledCard = styled(Card)`
  align-self: center;
  display:block;
  width:500px;
  margin:auto;
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`


const SellNFT: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { toastError, toastSuccess } = useToast()
  const [mystate, setMystate] = useState<any>()
  const hist=useHistory();
  const [isloaded, setIsloaded] = useState(false);
  const tid = new URLSearchParams(hist.location.search).get('tid');
  
const handleContributeSuccess = async (amount: BigNumber) => {
  
      toastSuccess(
        t('Success!'),
        t('You have contributed to this Market!'),
      )
    }
    
    const [onPresentContributeModal2] = useModal(
      <StakingModal
      tid={Number(tid)}
      onSuccess={handleContributeSuccess}
    />
      )
  useEffect(()=>{
    
      

    async function loadData(){
      const contract = getDNFTcraneContract(getDNFTcraneAddress());
      const stakingcontract = getNftStakingContract(getNftStakingcraneAddress());
      const reward=await stakingcontract.rewardPerDay.call();
    
      if(account&&!isloaded)
      {
            
            try{
              const uri=await contract.tokenURI(tid);
            console.log("https://".concat("".concat(uri).substring(7)))
            const resp= await axios.get("https://".concat("".concat(uri).substring(7)),{
                headers: {
                    'content-type': 'application/json'
                }
            });
            setMystate(<StyledCard isActive={!false}>
              <FarmCardInnerContainer>
                
              <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{Number(tid)}</Text>
                </Flex>
                <br/>
                <Flex justifyContent="space-between">
                    <Text>Apy:</Text>
                    <Text bold>{365*(reward.toString()/100000)} %</Text>
                  </Flex>
                  <br/>
                  <img style={{margin:"auto",width:"400px",height:"auto"}} alt="Nft avatar" src={"https://rareseas.mypinata.cloud/ipfs/".concat("".concat(resp.data.image).substring(7))}/>
                  <br/>
                <Flex justifyContent="space-between">
                
               

                <Button  onClick={onPresentContributeModal2}>Stake</Button>
                </Flex>
                
              </FarmCardInnerContainer>
        
              
            </StyledCard>);
            setIsloaded(true)
          }
          catch(e){
            const resp={nam:"N/A",desc:"N/A",img:"N/A"};
            setMystate(<StyledCard  isActive={!false}>
              <FarmCardInnerContainer>
                
              <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{Number(tid)}</Text>
                </Flex>
                <br/>
                
                <Flex justifyContent="space-between">
                  <Text>Desc:</Text>
                  <Text bold>{resp.desc}</Text>
                </Flex>
                <br/>
                <img style={{margin:"auto",width:"400px",height:"auto"}} alt="Nft avatar" src="/logo.png"/>
                  <br/>
               
                <br/>
                <Flex justifyContent="space-between">
               

<Button  onClick={onPresentContributeModal2}>Stake</Button>
                </Flex>
              </FarmCardInnerContainer>
        
              
            </StyledCard>);
          }
            
            
        
      }
    }
    loadData();
  },[account,t,toastSuccess,hist,onPresentContributeModal2,tid,toastError,isloaded])

 

  

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFTs')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('View or Sell your NFTs')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",display:"flex"}}>
      
        {mystate}
        
      </Page>
    </>
  )
}

export default SellNFT
