import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
// margin-left: 20%;
// margin-right: 20%;
// margin-top: 1.5em;

@media (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
   }

   @media (max-width: 500px) {
    font-size: 36px;
    line-height: 1;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: M5;
    font-size: 36px;
    font-weight: 500;
    color: #D60105;
    text-align: left;
      @media (max-width: 550px) {
      font-size: 32px;
      // line-height: 1.2;
         
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
