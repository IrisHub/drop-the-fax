import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top: 1.5em;
margin-bottom: 2em;

@media (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
   }

   @media (max-width: 500px) {
    font-size: 24px;
    line-height: 1.8;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: Helvetica;
    font-size: 36px;
    line-height: 1.4;
    font-weight: 500;
    text-align: center;
      @media (max-width: 500px) {
      font-size: 18px;
      line-height: 1.8;
         
       }

`;

const Subtitle = ( {text, color, tag} ) => {
  return(
    <Wrapper> 
        <CaseTitle > {text} </CaseTitle>
    </Wrapper>
  )
}

export default Subtitle;
