import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import { Link } from 'react-router-dom'
import Hero from './components/Hero'

import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import FarmAuctionsBanner from './components/Banners/FarmAuctionsBanner'


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`


const Home: React.FC = () => {
  const items=[
  <a href='/farms'><img className='item' alt="b1" src="./banners/b1.png"/></a>,
  <a href='/ilo'><img className='item' alt="b3" src="./banners/b3.png"/></a>,
  <a href='https://www.melegaswap.finance/apply'><img className='item' alt="b2" src="./banners/b2.png"/></a>
]
const items2=[
<a href='/pools'><img className='item' alt="b1" src="./banners/sb1.png"/></a>,
<a href='/pools'><img className='item' alt="b2" src="./banners/sb2.png"/></a>,
<a href='/pools'><img className='item' alt="b4" src="./banners/sb4.png"/></a>,
<a href='/pools'><img className='item' alt="b5" src="./banners/sb5.png"/></a>,
<a href='/pools'><img className='item' alt="b6" src="./banners/sb6.png"/></a>,
<a href='/pools'><img className='item' alt="b7" src="./banners/sb7.png"/></a>,
<a href='/pools'><img className='item' alt="b8" src="./banners/sb8.png"/></a>,
<a href='/pools'><img className='item' alt="b9" src="./banners/sb9.png"/></a>,
<a href='/pools'><img className='item' alt="b10" src="./banners/sb10.png"/></a>,
<a href='/pools'><img className='item' alt="b11" src="./banners/sb11.png"/></a>,
<a href='/pools'><img className='item' alt="b12" src="./banners/sb12.png"/></a>,
<a href='/pools'><img className='item' alt="b13" src="./banners/sb13.png"/></a>,
<a href='/pools'><img className='item' alt="b14" src="./banners/sb14.png"/></a>,
<a href='/pools'><img className='item' alt="b15" src="./banners/sb15.png"/></a>,
<a href='/pools'><img className='item' alt="b16" src="./banners/sb16.png"/></a>,
<a href='/pools'><img className='item' alt="b17" src="./banners/sb17.png"/></a>,
]
const responsive={
  
  1024: {
      items: 3,
      itemsFit: 'contain',
  }
}
const responsive2={
  
  1024: {
      items: 4,
      itemsFit: 'contain',
  }
}
  return (
    <>
    
    <div >
     
    <SalesSection {...swapSectionData} />
    </div>

      <div className="container">
        
        <AliceCarousel name='banner' disableButtonsControls={!false} disableDotsControls={!false} responsive={responsive}  autoPlay={!false}  items={items}/>
      
    </div>
    <div style={{margin:"1.5rem"}}>
    <FarmsPoolsRow  />
    </div>
    <div >
        
        <AliceCarousel name='subbanner' disableButtonsControls={!false} disableDotsControls={!false}  responsive={responsive2} autoPlay={!false} autoPlayInterval={0} animationDuration={2000} items={items2}/>
      
    </div>
    <br/>
      
     
      
      <CakeDataRow/>
        
    </>
  )
}

export default Home
