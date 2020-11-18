import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
padding-left: 10%;
padding-right: 10%;
margin-top: 1.5em;
// margin-bottom: 1.5em;
border-style: solid;
border-color: red;
border-width: 4;


@media (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
   }

   @media (max-width: 500px) {
    font-size: 21px;
    line-height: 1.4;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: Courier;
    font-size: 64px;
    color: red;
    line-height: 1.4;
    // font-weight: 600;
    text-align: left;
      @media (max-width: 500px) {
      font-size: 36px;
      line-height: 1.4;
         
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
