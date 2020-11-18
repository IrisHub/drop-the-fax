import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`

padding: 8%;
padding-left: 20%;
padding-right: 20%;

// margin-bottom: 1.5em;
border-style: solid;
border-color: red;
border-width: 3px;


@media (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
   }

   @media (max-width: 500px) {
    font-size: 18px;
    line-height: 1.4;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: Courier;
    font-size: 48px;
    color: red;
    line-height: 1.4;
    // font-weight: 600;
    text-align: left;
      @media (max-width: 500px) {
      font-size: 24px;
      line-height: 1.4;
      padding: 5%;
         
       }

`;

const Title = ( {text, color, tag} ) => {
  return(
    <Wrapper> 
        <CaseTitle > {text} </CaseTitle>
    </Wrapper>
  )
}

export default Title;
