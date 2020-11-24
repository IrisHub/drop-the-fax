import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';
import '../components/marquee.css';
import marq from '../images/marqueerev@3x.png';
import { keyframes } from 'styled-components'


const MarqueeAnimation = keyframes`
//  0% { left: 0; }
//  50% { left: 100%; }
//  100% { left: 0; }
    0% {transform:translateX(-4165px);transform:translateX(0);}
    100% {transform:translateX(0);transform:translateX(-4165px);}

 `




const Header = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100vw;
    // font-family: Adieu, sans-serif;
    // font-size: 1.4rem;
    // color: white;
    // border-bottom: 2px solid white;
    // overflow: hidden


    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100vw;
    font-family: Adieu, sans-serif;
    font-size: 1.4rem;
    color: white;
    border-bottom: none;
    overflow: hidden;
    z-index: 2;


    
         
   
`;


const MarqueeImg = styled.div`
    width: 200vw;
    min-width: 8330px;
    height: 2rem;
    background: url(${marq}) 0 center repeat-x #D60105;;
    background-size: auto 2rem;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: ${MarqueeAnimation} 60s linear infinite;
    animation: ${MarqueeAnimation} 60s linear infinite

    // @media (max-width: 1000px) {
    //    margin-left: 7vw;
    //    margin-right: 7vw;
        
    //   }

    //   @media (max-width: 500px) {
    //   font-size: 18px;
    //   line-height: 1.8;
         
    //    }
`;



const RevMarquee = ( {text, color} ) => {
  return(
    <React.Fragment> 
        <Header > 
        <MarqueeImg></MarqueeImg>
        </Header>
    </React.Fragment>
  )
}

export default RevMarquee;