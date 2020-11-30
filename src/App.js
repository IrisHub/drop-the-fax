import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import Faxed from "./faxed";

import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Footer from './components/footer';
import Line from './components/line';
import Paragraph from './components/paragraph';
import Highlighter from './components/highlighter';
import Label from './components/label';
import Marquee from './components/marquee';
import RevMarquee from './components/reverse-marquee';
import ShareButton from './components/share-button';



import FaxButton from './faxbutton';

import Image from "./image";
import SmallImage from "./small-img";

import SplitImage from "./split-img";
import TripleImage from "./triple-img";

import SignUp from "./signup";



import Title from './components/title.js'
import Subtitle from './components/subtitle.js'
import Alert from './components/alert.js'
//power transitions on home
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import flame from './images/redflame@2x.png';
import button from './images/redbutton@3X.png';
import fax from './images/faxfax@3x.png';








function App() {
  return (
    <div className="App">
    <div className="Container"> 
    {/* <MyNavbar></MyNavbar> */}
    {/* <Divider></Divider> */}
    {/* <Title text = 'PRESS THIS BUTTON, FLOOD UNIVERSITY PRESIDENTS FROM 10 SCHOOLS WITH FAX MESSAGES'></Title> */}
    {/* <Title text = 'A PETITION TO MAKE OUR FINAL EXAMS COLLABORATIVE, BUT YOU SIGN IT BY FLOODING UNIVERSITY PRESIDENTS WITH FAX MESSAGES.'></Title> */}
    <Marquee></Marquee>
    {/* <Title text = 'PROTEST FULL TUITION DURING COVID BY FLOODING UNIVERSITY PRESIDENTS WITH FAXES'></Title> */}


    <div className="Main-container">
    <div className="Hero-container"> 
    <Label></Label>

      <Title text = 'CHARGING FULL TUITION IN A PANDEMIC IS WRONG.'></Title>
      {/* <Subtitle text = 'Colleges ignore our emails and petitions, so we found a backdoor.  The old, loud fax machines in every campus office.  Make some noise: send one million faxes to your college president..'></Subtitle> */}
      <div className="Subtitle">Colleges <b>ignore</b> our emails and petitions, so we found a <b>backdoor</b>.  The old, loud <b>fax machines</b> in every campus office.  Make some noise: send <b>one million faxes </b>to your college president.. </div>

    </div>
    
    <div className="Print-container"> 

      {/* <div className="Left">  
        {/* <Image
            image = "./images/print.gif"
          ></Image>  */}
                 

      {/* </div> */} 

      <div className="Middle"> 

      <div className="Button-Container-Mobile">
        <Link to= "/fax" className="Button"> 
            <img className = "Button-img" src = {button} />
        </Link>
        </div>

          <Image
            image = "./images/faxfax@2x.png"
          ></Image> 
        
      </div>

      <div className="Right">  
        <div className = "Caption"> FAX THIS BILL</div>
        <div className = "Caption-text"> CHARGE YOUR SCHOOL FOR UNFAIR TUITION! </div>

        <div className="Button-container">
        <Link to= "/fax" className="Button"> 
            <img className = "Button-img" src = {button} />
        </Link>
        </div>


      </div>

      </div>

      {/* <div className="LabelTop"> 
        <Label></Label>
        </div> */}

      {/* <div className="Share-text">SHARE WITH YOUR FRIENDS TO GET TO 1 MILLION FAXES!</div> */}
      </div>

     
      {/* <Divider></Divider> */}

      <div className="Text-container"> 

        <Title text = "FAQ"></Title>
        <Highlighter text = "Q: DOES THIS REALLY SEND FAXES?"></Highlighter>
        <Paragraph text = "A: Yes. press fax and send to 13 university presidents from Stanford, Cal, UCLA, USC, MIT and every Ivy."></Paragraph>

        <Highlighter text = "Q: WHY THIS?"></Highlighter>
        <Paragraph text = "A: Emails, petitions and protests get ignored. it is hard to ignore a tsunami of papers flying out of a house-sized machine that sounds like a jackhammer."></Paragraph>

        <Highlighter text = "Q: WHO ARE U?"></Highlighter>
        
        <Paragraph text = "A: College students from California. COVID took away 99% of the value of college, but took away 0% of the price."></Paragraph>

        <Highlighter text = "Q: *UNIVERSITY PRESIDENT UNPLUGS FAX MACHINE* "></Highlighter>
        <Paragraph text = " A: We don't care about admin reading each message.  It's about the collective statement we make as students coming together to send 1,000,000 faxes against tuition.  Plus, faxes are all online now, so unplug away. :) "></Paragraph>

        <Highlighter text = "Q: WHAT ABOUT THE TREES???"></Highlighter>
        <Paragraph text = " A: We're not here to destroy the environment. We're personally donating to onetreeplanted.org to offset the papers we're printing."></Paragraph>

       

        {/* {/* <Paragraph text = "ADMINISTRATORS HAVEN'T LISTENED TO PETITIONS.  BUT FLOODING AN OFFICE WITH THOUSANDS OF FAXES?  THAT'S A STATEMENT.  JOIN US TO PROTEST FULL TUITION IN ONLINE SCHOOL THIS YEAR. "></Paragraph> */}
        <Divider></Divider>

      </div>

      <div className="Cta-footer">
        <div className= "Footer-text"> THIS IS A STATEMENT BY TEACH, A GROUP OF UNDERCLASSMEN FROM STANFORD & BERKELEY </div>
        <div className="Signup-wrapper"> 
        {/* <SignUp></SignUp> */}
        </div>
        {/* <a href = "https://apps.apple.com/us/app/teach-learn-with-your-class/id1538387223" target = "_blank"> DOWNLOAD TEACH NOW</a>  */}
      </div>

      <RevMarquee></RevMarquee>


      </div>

      

    </div>
  );
}

export default App;
