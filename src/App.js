import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Footer from './components/footer';

import Image from "./image";
import SplitImage from "./split-img";
import TripleImage from "./triple-img";

import SignUp from "./signup";


import Title from './components/title.js'
import Subtitle from './components/subtitle.js'
import Alert from './components/alert.js'
//power transitions on home
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Fade from 'react-reveal/Fade';










function App() {
  return (
    <div className="App">
    <Alert text = "NEW:  We've started sending invites out to seniors from UC Berkeley from our waitlist!"></Alert>
    <MyNavbar></MyNavbar>


    <Title text = 'YOUR STARTER PACK FOR ONLINE SCHOOL.'></Title>
    <Subtitle text = "Your new life online got real stressful, and it's week 4.  Iris helps you stay close to your friends and on top of your work.   "></Subtitle>
    {/* <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a>  */}
    {/* <Divider></Divider> */}
    <SignUp></SignUp>

    
     <Image
       image = "./images/phoneprod@2x.gif"
     ></Image> 

{/*        
    <SplitImage
      image1 = "./images/computer@2x.png"
      image2 = "./images/oski@2X.png"
    ></SplitImage>  */}

    {/* <TripleImage
      image1 = "./images/oski@2x.png"
      image2 = "./images/phoneprod@2x.png"
      image3 = "./images/computer@2x.png"
    ></TripleImage>  */}


    <Fade> 
    <Subtitle text = "Berkeley friends, this is for you!"></Subtitle>

    <Manifesto></Manifesto>
    </Fade>
    <SignUp></SignUp>

    {/* <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a>  */}
    <Divider></Divider>
    <Footer></Footer>
    </div>
  );
}

export default App;
