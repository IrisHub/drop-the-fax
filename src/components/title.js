import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`

// padding-top: 4%;
// padding-bottom: 3%;

// padding-left: 10%;
// padding-right: 10%;

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
    // font-family: Arial-black;
    font-family: Milli-extra;
    font-size: 60px;
    letter-spacing: 4%;
    color: #D60105;
    line-height: 1.4;
    // font-weight: 600;
    text-align: left;

    @media (max-width: 1000px) {
      padding-left: 0;
      padding-right: 0;
      padding-top: 10%;
      font-size: 48px;
  
     }

      @media (max-width: 550px) {
      font-size: 36px;
      line-height: 1.4;
      padding: 5%;
      text-align: center;
         
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
