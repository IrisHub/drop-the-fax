import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';
import '../index.css';


const CaseParagraph = styled.div`
    // font-weight: 500;
    font-family: Teight;
    font-size: 36px;
    line-height: 40px;
    text-align: left;
    margin-top: 1em;
    margin-bottom: 1.5em;
    color: #D60105;

    @media (max-width: 1000px) {
       margin-left: 7vw;
       margin-right: 7vw;
       font-size: 18px;

        
      }

      @media (max-width: 500px) {
      font-size: 24px;
      line-height: 1.2;
         
       }

`;

const Paragraph = ( {text, color} ) => {
  return(

    <CaseParagraph > {text} </CaseParagraph>
  )
}

export default Paragraph;
