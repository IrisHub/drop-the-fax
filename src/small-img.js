import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './small-img.css';




const SmallImage = ( {image, caption, color} ) => {
  return(
      <div className="small-img-wrapper"> 
        <img className = "small-img" src ={require(`${image}`)} /> 
      </div>
  )
}

export default SmallImage;
