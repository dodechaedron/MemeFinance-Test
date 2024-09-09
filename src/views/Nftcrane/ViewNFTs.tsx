import React, {
  useEffect,
  useState,
} from 'react'

import axios from 'axios'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
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
  const hist=useHistory();
  
  const [mystate, setMystate] = useState<any>()

  useEffect(()=>{
    async function loadData(){
      const contract = getDNFTcraneContract(getDNFTcraneAddress());
      const stakingcontract = getNftStakingContract(getNftStakingcraneAddress());
      const reward=await stakingcontract.rewardPerDay.call();
      if(account)
      {
        const nftsids=await contract.getTokenIds(account);
        const len=nftsids.length;
        
        const alldata=[];
        for(let i=0;i<len;i++)
        {
            const uri=await contract.tokenURI(nftsids[i]);
            console.log("https://".concat("".concat(uri).substring(7)))
            const resp= await axios.get("https://".concat("".concat(uri).substring(7)),{
                headers: {
                    'content-type': 'application/json'
                }
            });
            console.log(resp)
            alldata.push(<StyledCard key={i} isActive={!false}>
                <FarmCardInnerContainer>
                  
                <Flex justifyContent="space-between">
                    <Text>NFT Id:</Text>
                    <Text bold>{Number(nftsids[i])}</Text>
                  </Flex>
                  <br/>
                  
                  <Flex justifyContent="space-between">
                    <Text>Apy:</Text>
                    <Text bold>{365*(reward.toString()/100000)} %</Text>
                  </Flex>
                  <br/>
                  <img style={{margin:"auto",width:"300px",height:"auto"}} alt="Nft avatar" src={"https://rareseas.mypinata.cloud/ipfs/".concat("".concat(resp.data.image).substring(7))}/>
                  <br/>
                  <Flex justifyContent="center">
                <Button onClick={
                  ()=>hist.push('/sellNFT?tid='.concat(Number(nftsids[i]).toString()))
                }>View</Button>
                  
                </Flex>
                </FarmCardInnerContainer>
          
                
              </StyledCard>);
        }
         setMystate(alldata);
      }
    }
    loadData();
  },[account,hist])

 

  

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFTs')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('View your NFTs')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",display:"flex",flexWrap:"wrap"}}>
      
        {mystate}
        
      </Page>
    </>
  )
}

export default ViewNFTs
