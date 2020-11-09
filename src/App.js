import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Footer from './components/footer';
import Line from './components/line';
import Paragraph from './components/line';


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


    <Title text = 'DROP FAX ON ADMIN, DOWNLOAD TEACH'></Title>
    <Line text = "TEACH IS A NEW APP AT STANFORD THAT LETS YOU COLLAB ANONYMOUSLY W/ UR CLASS"></Line>
    <Paragraph text = "POLICIES ON TESTING AND COLLABORATION HAVEN’T CAUGHT UP TO OUR NEW WORLD ONLINE.  IT’S A FACT THAT STUDENTS LEARN BETTER TOGETHER. SO WHY NOT FAX A MESSAGE ALONG TO UNIVERSITY ADMIN >:)?"></Paragraph>

    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "1. FAX IT TO ADMIN"></ConfirmButton> </a> 
    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "2. JOIN THE APP"></ConfirmButton> </a> 

    {/* <Divider></Divider> */}
    {/* <SignUp></SignUp> */}

    
     <Image
       image = "./images/fax@2x.png"
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


    {/* <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a>  */}
    <Divider></Divider>
    <Footer></Footer>
    </div>
  );
}

export default App;
