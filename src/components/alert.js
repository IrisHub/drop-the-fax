import React, {Component} from 'react'; 
import styled, { css } from 'styled-components';

const CaseLine = styled.div`
    font-weight: normal;
    font-family: HelveticaBold ;
    font-size: 18px;
    line-height: 40px;
    background-color: #ffd955;
    padding-top: 1em;
    padding-bottom: 1em;
    // padding-left: 30%;
    // padding-right: 30%;
    text-align: center;




    @media (max-width: 1000px) {
     
        
      }

      @media (max-width: 500px) {
      font-size: 18px;
      line-height: 1.8;
      display: none;
         
       }

`;

const Alert = ( {text, color} ) => {
  return(

    <CaseLine > {text} </CaseLine>
  )
}

export default Alert;