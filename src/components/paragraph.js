import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';
import '../index.css';


const CaseParagraph = styled.div`
    font-weight: 500;
    font-family: Helvetica;
    font-size: 24px;
    line-height: 40px;
    text-align: left;
    margin-top: 1em;
    margin-bottom: 1.5em;

    @media (max-width: 1000px) {
       margin-left: 7vw;
       margin-right: 7vw;
        
      }

      @media (max-width: 500px) {
      font-size: 18px;
      line-height: 1.8;
         
       }

`;

const Paragraph = ( {text, color} ) => {
  return(

    <CaseParagraph > {text} </CaseParagraph>
  )
}

export default Paragraph;
