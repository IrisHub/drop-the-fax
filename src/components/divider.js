import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'


const CaseDivider = styled.h1`
    background-color: ${props => props.color};
    color: ${props => props.textcolor};

    padding-top: 2em;
    padding-bottom: 2em;

    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 20%;
    padding-right: 20%;

    @media (max-width: 500px) {
       padding-left: 7vw;
       padding-right: 7vw;
           
         }
  

`;


const Divider = ( {title, color, textcolor} ) => {

  return(
    <CaseDivider color = {color} textcolor = {textcolor}> {title} </CaseDivider>

  )
}

export default Divider;

