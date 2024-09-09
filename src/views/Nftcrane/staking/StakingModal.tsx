import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { Modal, ModalBody, Text, Image, Button, BalanceInput, Flex } from '@pancakeswap/uikit'
import { PoolIds, Ifo } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { getBalanceAmount, getDecimalAmount, getFullDisplayBalance } from 'utils/formatBalance'
import { getAddress, getDNFTcraneAddress, getNftStakingcraneAddress } from 'utils/addressHelpers'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { useDNFTcraneContract, useERC20,  useNftStakingContract } from 'hooks/useContract'
import { BIG_NINE, BIG_TEN } from 'utils/bigNumber'
import tokens from 'config/constants/tokens'
import { getContract } from 'utils'
import useToast from 'hooks/useToast'
import { useHistory } from 'react-router-dom'
import { getDNFTcraneContract } from 'utils/contractHelpers'

interface Props {
  tid:number
    onSuccess: (amount: BigNumber) => void
    onDismiss?: () => void
  }

  const gasPrice = BIG_TEN.times(BIG_TEN.pow(BIG_NINE)).toString()
const StakingModal: React.FC<Props> = ({
  tid,
  onDismiss,
  onSuccess,
}) => {
  const [value, setValue] = useState('')
  const { account } = useWeb3React()
  const contract=useNftStakingContract(getNftStakingcraneAddress());
  const usNFT=useDNFTcraneContract(getDNFTcraneAddress());
  const { toastError, toastSuccess } = useToast()
  const hist=useHistory();
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false)
  
  
  console.log(tid)
  const { t } = useTranslation()
  useEffect(()=>{
    async function loaddata() {
      const NFTCont=getDNFTcraneContract(getDNFTcraneAddress());
      const allowance=await NFTCont.getApproved(tid)
    if(allowance!==getNftStakingcraneAddress())
      setApproved(false)
      else
    setApproved(true)
    }
    
    loaddata();
  },[contract,tid])

  return (
    <Modal title={t('', { })} onDismiss={onDismiss}>
      <ModalBody maxWidth="350px">
        
        
      
       
        
        <Text color="textSubtle" fontSize="12px" mb="24px">
          {t(
            !approved?'Approve your NFT for staking':'Your NFT is approved. now you can stake it.',
          )}
        </Text>
        {approved?<Button
          isLoading={loading}
          onClick={async ()=>{
            try {
              setLoading(true);
            const tx = await contract.stake(tid,{gasPrice,value:"20000000000000000"});
             const receipt=await tx.wait()
              if (receipt.status) {
                toastSuccess(t('Staked'), t('NFT is staked in the pool'))
                onDismiss();
              }
              setLoading(false);
            } catch (error:any) {
              if(error.code!==4001)
              toastError(t('Error'), t('You are not allowed.'))
              
              setLoading(false);
            }
          }}
        >Stake</Button>:<Button
       isLoading={loading}
        onClick={async ()=>{
          try {
            setLoading(true);
          const tx = await usNFT.approve(getNftStakingcraneAddress(),tid);
           const receipt=await tx.wait()
            if (receipt.status) {
              toastSuccess(t('Approved'), t('NFT is approved for staking'))
              setApproved(true);
            }
            setLoading(false);
          } catch (error:any) {
            if(error.code!==4001)
            toastError(t('Error'), t('You are not allowed.'))
            setLoading(false);
          
          }
        }}
      >Approve</Button>}
       
        
      </ModalBody>
    </Modal>
  )
}

export default StakingModal