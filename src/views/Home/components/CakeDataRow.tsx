import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { Link } from 'react-router-dom'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton,Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

const OuterDiv = styled('div')`
 
display:flex;
flex-direction:column;
min-width:100%;
width:100%;
color:#fff;
justify-content:center;
  ${({ theme }) => theme.mediaQueries.lg} {
    display:flex;
min-width:100%;
width:100%;
color:#fff;
    flex-direction:row;
  }
`
const InnerDiv1 = styled('div')`

  min-width:100%;
  width:100%;
  display:flex;
    flex-direction:column;
    justify-content:center;
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width:40%;
    width:40%;
  }
`
const InnerDiv2 = styled('div')`
min-width:100%;
    width:100%;
display:flex;
    flex-direction:row;
    justify-content:center;
    
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width:45%;
    width:45%;
  }
`
const InnerDiv3 = styled('div')`
min-width:100%;
width:100%;
display:flex;
    flex-direction:column;
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width:15%;
    width:15%;
  }
`

const MaximizeDiv = styled('div')`

display:flex;
padding:5px;
flex-direction:column;
justify-Content:center;
  ${({ theme }) => theme.mediaQueries.sm} {
    display:flex;
padding:5px;
flex-direction:row;
justify-Content:space-between;

    
  }
`

const emissionsPerBlock = 0.162118

const CakeDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  console.log(cakeSupply,burnedBalance)
  const cakePriceBusd = usePriceCakeBusd()
  console.log(cakePriceBusd)
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  return (
    <OuterDiv style={{"textAlign":"center",padding:"2rem"}}>
        <InnerDiv1 style={{padding:"1rem",textAlign:"center",border:"1px solid", borderRadius:"1rem"}}>
        <MaximizeDiv >
          <Flex flexDirection="column" >
          <Flex padding="1rem"  style={{textAlign:"center",alignItems:"center"}}>
            <img alt="logo" src="/logo.png" style={{width:"32px"}}/>
            {cakePriceBusd?<p>&nbsp;&nbsp;&nbsp;$ {cakePriceBusd.toFixed(7)}</p>:<Skeleton/>}
          </Flex>
          <br/>
          <Flex padding="1rem"  style={{textAlign:"center",alignItems:"center"}}>
            <img alt="logo" src="/metmaskicon.png" style={{width:"32px"}}/>
            &nbsp;&nbsp;&nbsp;<Link to="/swap"><Button>Buy</Button></Link>
          </Flex>
          </Flex>
          <Flex  flexDirection="column">
          <Flex padding="1rem" justifyContent="space-between" style={{textAlign:"center",alignItems:"center"}}>
            <p>Max Supply:</p>{totalSupply?<p>{totalSupply.div('1000000000000000000').toString()}</p>:<Skeleton/>}
          </Flex>
          <Flex padding="1rem" justifyContent="space-between" style={{textAlign:"center",alignItems:"center"}}>
            <p>Market Cap:</p>{mcap?<p>{mcapString}</p>:<Skeleton/>}
          </Flex>
          <Flex padding="1rem" justifyContent="space-between" style={{textAlign:"center",alignItems:"center"}}>
            <p>Total Burned:</p>{burnedBalance?<p>&nbsp;{burnedBalance.toString()}</p>:<Skeleton/>}
          </Flex>
          </Flex>
        </MaximizeDiv>
        
        </InnerDiv1>
        <br/>
        <InnerDiv2>
        <Flex flexDirection="column" style={{"textAlign":"center",minWidth:"33.333%"}}>
        <h1 style={{fontSize:"1.5rem"}}>Products</h1>
        <br/>
        <a style={{margin:"0.5rem"}} href='/swap'>Exchange</a>
        <a style={{margin:"0.5rem"}} href='/add'>Liquidity</a>
        <a style={{margin:"0.5rem"}} href='/farms'>Farms</a>
        <a style={{margin:"0.5rem"}} href='/pools'>Pools</a>
        </Flex>
        <br/>
        <Flex flexDirection="column" style={{"textAlign":"center",minWidth:"33.333%"}}>
        <h1 style={{fontSize:"1.5rem"}}>About</h1>
        <br/>
        <a style={{margin:"0.5rem"}} href='mailto:hello@melegaswap.finance'>Info</a>
        <a style={{margin:"0.5rem"}} href='https://www.melegaswap.finance/about'>Docs</a>
        <a style={{margin:"0.5rem"}} href='https://www.melegaswap.finance/marco-token'>MARCO Token</a>
        <a style={{margin:"0.5rem"}} href='https://www.melegaswap.finance/babymarco'>BabyMarco</a>
        </Flex>
        <br/>
        <Flex flexDirection="column" style={{"textAlign":"center",minWidth:"33.333%"}}>
        <h1 style={{fontSize:"1.5rem"}}>Services</h1>
        <br/>
        <a style={{margin:"0.5rem"}} href='https://www.melegaswap.finance/apply'>Apply for listing</a>
        <a style={{margin:"0.5rem"}} href='https://melega.space/'>Melega Space</a>
        </Flex>
        </InnerDiv2>
        <br/>
        <InnerDiv3 style={{"textAlign":"center"}}>
        <h1 style={{fontSize:"1.5rem"}}>Community</h1>
        <br/>
        <Flex width="100%" style={{justifyContent:"center"}}>
        <a style={{margin:"0.5rem"}} href='https://t.me/melegacommunity'><img alt="logo" src="/teleicon.png" style={{width:"16px"}}/></a>
        <a style={{margin:"0.5rem"}} href='https://www.instagram.com/melega.finance/'><img alt="logo" src="/instaicon.png" style={{width:"16px"}}/></a>
        <a style={{margin:"0.5rem"}} href='https://twitter.com/meleganews'><img alt="logo" src="/twiticon.png" style={{width:"16px"}}/></a>
        
        <a style={{margin:"0.5rem"}} href='https://medium.com/@melega'><img alt="logo" src="/medicon.png" style={{width:"16px"}}/></a>
        <a style={{margin:"0.5rem"}} href='https://www.youtube.com/channel/UC_kjHoXOkPSSB4HeHNZMq-Q'><img alt="logo" src="/youicon.png" style={{width:"16px"}}/></a>
        </Flex>
        </InnerDiv3>
        
        
        </OuterDiv>
  )
}

export default CakeDataRow
