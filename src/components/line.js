import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';

const CaseLine = styled.div`
    font-weight: 600;
    font-family: Arial;
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    color: #D60105;
  



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

const Line = ( {text, color} ) => {
  return(

    <CaseLine > {text} </CaseLine>
  )
}

export default Line;
