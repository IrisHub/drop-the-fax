import React, {Component} from 'react'; 
import '../components/cta-button.css';

const ConfirmButton = ({text, visible}) => {

    return(
    <div className = "cta-button">{text}</div>
    
    )
  }

  export default ConfirmButton;
