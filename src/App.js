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
import Highlighter from './components/highlighter';



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
    {/* <Alert text = "NEW:  We've started sending invites out to seniors from UC Berkeley from our waitlist!"></Alert> */}
    <div className="Container"> 
    {/* <MyNavbar></MyNavbar> */}
      <div className="Left"> 
          <Title text = 'DROP FAX ON ADMIN, DOWNLOAD TEACH'></Title>
        <Image
          image = "./images/print@2x.gif"
        ></Image> 
      </div>
      <div className="Right"> 
        <Divider></Divider>
        <Highlighter text = "TEACH IS A NEW APP AT STANFORD THAT LETS YOU COLLAB ANONYMOUSLY W/ UR CLASS"></Highlighter>
        <Paragraph text = "POLICIES ON TESTING AND COLLABORATION HAVEN’T CAUGHT UP TO OUR NEW WORLD ONLINE.  IT’S A FACT THAT STUDENTS LEARN BETTER TOGETHER. SO WHY NOT FAX A MESSAGE ALONG TO UNIVERSITY ADMIN >:)?"></Paragraph>
        <div className="Button-container"> 
          <a className="Button" href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "1. FAX IT TO ADMIN"></ConfirmButton> </a> 
          <div className="Label">1200 FAXES</div>
        </div>

        <div className="Button-container"> 
          <a className="Button" href = "https://apps.apple.com/us/app/teach-learn-with-your-class/id1538387223" target = "_blank"> <ConfirmButton text = "2. JOIN THE APP"></ConfirmButton> </a> 
          <div className="Label">301 STUDENTS</div>

        </div>

      </div>
      
    </div>



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
    {/* <Divider></Divider> */}
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
