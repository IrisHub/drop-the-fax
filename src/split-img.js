import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './split-img.css';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: 1.5em;
margin-bottom: 2em;
width: 40px;

@media (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
   }

   @media (max-width: 500px) {
    font-size: 24px;
    line-height: 1.8;
    flex-direction: column;

       
     }
`;






const SplitImage = ( {image1,image2, caption, color} ) => {
  return(
      <Wrapper> 
      <img className = "img1" src ={require(`${image2}`)} /> 

      <img className = "img2" src ={require(`${image1}`)} /> 
      </Wrapper>
  )
}

export default SplitImage;
