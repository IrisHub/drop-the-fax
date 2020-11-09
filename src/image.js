import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './image.css';




const Image = ( {image, caption, color} ) => {
  return(
      <React.Fragment> 
      <img className = "small-img" src ={require(`${image}`)} /> 
      </React.Fragment>
  )
}

export default Image;
