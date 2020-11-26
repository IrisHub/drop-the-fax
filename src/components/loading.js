// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../images/printload.json'
import './loading.css';


class Loading extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="Animation-container">
        <Lottie options={defaultOptions}
            //   height={400}
            //   width={400}
        />
      </div>
    )
  }
}

export default Loading