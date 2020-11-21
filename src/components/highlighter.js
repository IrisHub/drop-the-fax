import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';

const CaseLine = styled.div`
    font-weight: normal;
    font-family: Arial-black;
    font-weight: 600;
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    color: #D60105;
    // background-color: rgba(255, 0, 0, 0.1);



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

const Highlighter = ( {text, color} ) => {
  return(

    <CaseLine > {text} </CaseLine>
  )
}

export default Highlighter;
