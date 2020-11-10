import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './small-img.css';




const SmallImage = ( {image, caption, color} ) => {
  return(
      <React.Fragment> 
      <img className = "small-img" src ={require(`${image}`)} /> 
      </React.Fragment>
  )
}

export default SmallImage;
