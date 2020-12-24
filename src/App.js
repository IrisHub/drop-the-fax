import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import Faxed from "./faxed";

import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Nav from './components/nav.js';

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
    {/* <Nav></Nav> */}
    {/* <Title text = 'PROTEST FULL TUITION DURING COVID BY FLOODING UNIVERSITY PRESIDENTS WITH FAXES'></Title> */}


    <div className="Main-container">
    <div className="Hero-container"> 

      <Title text = "2020'S LAST CHANCE TO LOWER OUR TUITION"></Title>
      {/* <Subtitle text = 'Colleges ignore our emails and petitions, so we found a backdoor.  The old, loud fax machines in every campus office.  Make some noise: send one million faxes to your college president..'></Subtitle> */}
      <div className="Subtitle-Text"> Go old school.  Fax 20 college presidents to lower our tuition.  </div>
      
      <div className="Label-Container-Web"> 
         <Label></Label>
      </div>

    </div>
    
    <div className="Print-container"> 

      <div className="Middle"> 

      <div className="Button-Container-Mobile">
        <Link to= "/fax" className="Button"> 
            <img className = "Button-img" src = {button} />
        </Link>
        <Label></Label>
        </div>

        <div className="Image-container"> 

            {/* <div className = "Caption-text"> FAX THIS BILL TO 13 SCHOOLS IN 1 CLICK! </div> */}
            <Image
              image = "./images/faxfax@2x.png"
            ></Image> 
        </div>
                

        
      </div>

      <div className="Right">  
        {/* <div className = "Caption"> FAX THIS BILL</div> */}

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

     

        {/* {/* <Paragraph text = "ADMINISTRATORS HAVEN'T LISTENED TO PETITIONS.  BUT FLOODING AN OFFICE WITH THOUSANDS OF FAXES?  THAT'S A STATEMENT.  JOIN US TO PROTEST FULL TUITION IN ONLINE SCHOOL THIS YEAR. "></Paragraph> */}
        <Divider></Divider>

      {/* </div> */}

      <div className="Cta-footer">
        <Link to="/faq" className="Footer-text">❔FAQ❔</Link>
        <div className= "Footer-text"> THIS IS A STATEMENT BY IRIS LABS, A GROUP OF UPPERCLASSMEN FROM STANFORD & BERKELEY </div>
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
