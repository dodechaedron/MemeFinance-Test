import React, {
  useEffect,
  useState,
} from 'react'

import axios from 'axios'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import { useNftStakingContract } from 'hooks/useContract'
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
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { DEFAULT_GAS_LIMIT } from 'config'

const StyledCard = styled(Card)`
  align-self: center;
  display:block;
  width:360px;
  margin:10px;
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
class NFTModal{
	image="";

	description="";

	name="";

	id="";
}

const ViewNFTs: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { toastError, toastSuccess } = useToast()
  const [mystate, setMystate] = useState<any>()
  const hist=useHistory();
  const [loading, setLoading] = useState(false)
  const wstakingcontract=useNftStakingContract(getNftStakingcraneAddress());

  

  useEffect(()=>{
    
      

    async function loadData(){
      const contract = getDNFTcraneContract(getDNFTcraneAddress());
      const stakingcontract = getNftStakingContract(getNftStakingcraneAddress());
      const reward=await stakingcontract.rewardPerDay.call();
      const gmarketcontract = getNftStakingContract(getNftStakingcraneAddress());
      if(gmarketcontract&&account)
      {
        const res=await gmarketcontract.getList(account)
        console.log("sad ",res)
        const alldata=[];
        for(let i=0;i<res.length;i++)
        {
          console.log("sads ",res)
            const uri=await contract.tokenURI(res[i].tokenId);
            const stakingTime=await stakingcontract.NftInfos(res[i].tokenId);
            console.log(uri)
            try{
              const resp= await axios.get("https://".concat("".concat(uri).substring(7)),{
                headers: {
                    'content-type': 'application/json'
                }
            });
            alldata.push(<StyledCard key={i} isActive={!false}>
              <FarmCardInnerContainer>
              <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{Number(res[i].tokenId)}</Text>
                </Flex>
                <br/>
                <Flex justifyContent="space-between">
                  <Text>Oceans Earned:</Text>
                  <Text bold>{(((reward.toString()/86400)*(Math.floor(Date.now()/1000)-(stakingTime.stakingTime).toNumber()))/100000).toFixed(2)}</Text>
                 
                </Flex>
                <br/>
                <Flex justifyContent="space-between">
                    <Text>Apy:</Text>
                    <Text bold>{365*(reward.toString()/100000)} %</Text>
                  </Flex>
                  <br/>
                  <img style={{margin:"auto",width:"300px",height:"auto"}} alt="Nft avatar" src={"https://rareseas.mypinata.cloud/ipfs/".concat("".concat(resp.data.image).substring(7))}/>
                  <br/>
                <Flex justifyContent="space-between">
                <Button isLoading={loading} onClick={
                  
                  async ()=>{
                    try {
                      setLoading(true);
                      const tx = await wstakingcontract.unstake(res[i].tokenId,{gasLimit:"2000000"});
                       const receipt=await tx.wait()
                        if (receipt.status) {
                          toastSuccess(t('Unstaked'), t('NFT is unstaked from the pool'))
                          
                        }
                        setLoading(false);
                      } catch (error:any) {
                        if(error.code!==4001)
                        toastError(t('Error'), t('You are not allowed.'))
                        
                        setLoading(false);
                      }
                  }
                }>Unstake</Button>
                <Button isLoading={loading} onClick={
                  async()=>{
                    try {
                      setLoading(true);
                      const tx = await wstakingcontract.harvest(res[i].tokenId,{gasLimit:"2000000"});
                       const receipt=await tx.wait()
                        if (receipt.status) {
                          toastSuccess(t('Harvested'), t('Reward is harvested and sent to your wallet'))
                          
                        }
                        setLoading(false);
                      } catch (error:any) {
                        if(error.code!==4001)
                        toastError(t('Error'), t('You are not allowed.'))
                        setLoading(false);
                      
                      }
                  }
                }>Harvest</Button>
                  
                </Flex>
                
              </FarmCardInnerContainer>
        
              
            </StyledCard>);
          }
          catch(e){
            const resp={nam:"N/A",desc:"N/A",img:"N/A"};
            alldata.push(<StyledCard key={i} isActive={!false}>
              <FarmCardInnerContainer>
                
              <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{Number(res[i].tokenId)}</Text>
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
                <Button isLoading={loading} onClick={
                  async ()=>{
                    try {
                      setLoading(true);
                      const tx = await wstakingcontract.unstake(res[i].tokenId);
                       const receipt=await tx.wait()
                        if (receipt.status) {
                          toastSuccess(t('Unstaked'), t('NFT is unstaked from the pool'))
                          
                        }
                        setLoading(false);
                      } catch (error) {
                        toastError(t('Error'), t('You are not allowed.'))
                        
                        setLoading(false);
                      }
                  }
                }>Unstake</Button>
                <Button isLoading={loading} onClick={
                  async()=>{
                    try {
                      setLoading(true);
                        console.log(Number(res[i].tokenId))
                      const tx = await wstakingcontract.harvest(res[i].tokenId);
                       const receipt=await tx.wait()
                        if (receipt.status) {
                          toastSuccess(t('Harvested'), t('Reward is harvested and sent to your wallet'))
                          
                        }
                        setLoading(false);
                      } catch (error) {
                        toastError(t('Error'), t('You are not allowed.'))
                        
                        setLoading(false);
                      }
                  }
                }>Harvest</Button>
                </Flex>
              </FarmCardInnerContainer>
            </StyledCard>);
          }
            
            
        }
         setMystate(alldata);
      }
    }
    loadData();
  },[t,toastSuccess,hist,wstakingcontract,account,toastError,loading])

 

  

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFT Staking')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Stake your NFTs and earn our tokens')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",display:"flex",flexWrap:"wrap"}}>
      
        {mystate}
        
      </Page>
    </>
  )
}

export default ViewNFTs
