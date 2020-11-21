import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`

padding-top: 5%;
padding-bottom: 3%;

padding-left: 10%;
padding-right: 10%;

// margin-bottom: 1.5em;
// border-style: solid;
// border-color: red;
// border-width: 3px;


@media (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 10%;

   }

   @media (max-width: 500px) {
    font-size: 18px;
    line-height: 1.4;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: Arial-black;
    font-size: 40px;
    color: #D60105;
    line-height: 1.4;
    // font-weight: 600;
    text-align: center;

    @media (max-width: 1000px) {
      padding-left: 0;
      padding-right: 0;
      padding-top: 10%;
      font-size: 36px;
  
     }

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
