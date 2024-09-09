import { Button, Card, Flex, Heading, Text, useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import { useDNFTcraneContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { getDNFTcraneAddress } from 'utils/addressHelpers'
import { getDNFTcraneContract } from 'utils/contractHelpers'
import Timer from './Timer'

const StyledCard = styled(Card)`
  align-self: center;
  width:300px;
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

const Nft: React.FC = () => {
  const { t } = useTranslation()
  const [amountMint, setAmountMint] = useState(1);
  const { toastError, toastSuccess } = useToast()
  const writeContract=useDNFTcraneContract(getDNFTcraneAddress());
  const { account } = useWeb3React()
  const [mystate, setMystate] = useState({cost:"0"})
  const [ispaused, setIspaused] = useState(false);

  useEffect(()=>{
    async function loadData(){
      const contract = getDNFTcraneContract(getDNFTcraneAddress());
      const ispause=await contract.paused.call();
      console.log(ispause)
      const cost:BigNumber=await contract.costPublic.call();
      
      console.log(cost.toString())
      if(account)
      
      {
        setMystate({cost:cost.toString()})
      }
      setIspaused(ispause);
    }
    loadData();
  },[account])

  const handleContributeSuccess = async (amount: BigNumber) => {
  
    toastSuccess(
      t('Success!'),
      t('You have contributed to this IFO!'),
    )
  }

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFTs')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Mint your new NFT')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",width:"300px"}}>
      <StyledCard isActive={!false}>
      <FarmCardInnerContainer>
        
        <Timer msg={ispaused?"false":"true"}/>
        <br/>
        <Flex justifyContent="space-between">
          <Text>{t('1 NFT')}:</Text>
          <Text bold>5000 BNBDRAGON</Text>
        </Flex>
        <br/>
        <Flex justifyContent="space-between">
          <Text>{t('Max mint amount')}:</Text>
          <Text bold>5 NFT</Text>
        </Flex>
        <br/>
        <div style={{display:"block", width:"300px",textAlign:"center"}}>
                   <div style={{display:"flex", width:"260px",marginLeft:"30px",textAlign:"center"}}>
                    <button  type='button' style={{marginLeft:"30px",marginRight:"30px",borderRadius:"10px",width:"30px",height:"30px",borderColor:"#fff", fontSize:"15px",fontWeight:"bolder"}} onClick={()=>{
                      if(amountMint>1)
                      setAmountMint(amountMint-1)
                    }}>-</button>
                   
                    <p style={{ fontSize:"15px",marginRight:"30px",fontWeight:"bolder",lineHeight:"2"}}>{amountMint}</p>
                 
                    <button style={{borderRadius:"10px",width:"30px",height:"30px",marginRight:"30px",borderColor:"#fff", fontSize:"15px",fontWeight:"bolder"}} type='button' onClick={()=>{
                      if(amountMint<5)
                      setAmountMint(amountMint+1)
                    }}>+</button>
                </div>
                </div>
        <br/>
        
        
      </FarmCardInnerContainer>

      
    </StyledCard>
        
      </Page>
    </>
  )
}

export default Nft
