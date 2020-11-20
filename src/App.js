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
import Paragraph from './components/line';
import Highlighter from './components/highlighter';
import Label from './components/label';
import Marquee from './components/marquee';

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







function App() {
  return (
    <div className="App">
    <div className="Container"> 
    {/* <MyNavbar></MyNavbar> */}
    {/* <Divider></Divider> */}
    {/* <Title text = 'PRESS THIS BUTTON, FLOOD UNIVERSITY PRESIDENTS FROM 10 SCHOOLS WITH FAX MESSAGES'></Title> */}
    {/* <Title text = 'A PETITION TO MAKE OUR FINAL EXAMS COLLABORATIVE, BUT YOU SIGN IT BY FLOODING UNIVERSITY PRESIDENTS WITH FAX MESSAGES.'></Title> */}
    <Marquee></Marquee>
    <Title text = 'PROTEST FULL TUITION DURING COVID BY FLOODING EVERY UNIVERSITY PRESIDENT WITH FAXES'></Title>


    
    <div className="Main-container"> 

      <div className="Left">  
        <Image
            image = "./images/print.gif"
          ></Image> 
      </div>

      <div className="Right"> 
        <div className="Label1"> 
        <Label></Label>
        </div>
        <Link to= "/fax" className="Button"> 
            {/* <ConfirmButton text = "FAX ALL THE ADMIN"></ConfirmButton>  */}

        {/* <Image
            image = "./images/redbutton@3X.png"
          ></Image>  */}

        <img className = "Button-img" src = {button} />


        </Link>
        {/* <img className = "img-hero" id = "carmen" src = {flame} /> */}
        {/* <div className="Label2"> 10,321 FAXES </div> */}
        <div className="Label2"> 

        <Label></Label>

        </div>
        <div className="Share-text">SHARE WITH YOUR FRIENDS TO GET TO 1 MILLION FAXES</div>




        

      </div>

      </div>

      <div className="Text-container"> 


        {/* <Highlighter text = "TEACH IS A NEW APP AT STANFORD THAT LETS YOU COLLAB ANONYMOUSLY W/ UR CLASS"></Highlighter> */}
        {/* <Highlighter text = "WHY FAX?"></Highlighter> */}
        {/* <Paragraph text = "FAXES ARE STRANGE, OLD MACHINES.  KIND OF LIKE UNIVERSITY ADMIN."></Paragraph> */}
        {/* <Paragraph text = "AS STUDENTS, WE LEARN BEST WHEN WE CAN WORK TOGETHER ON ASSIGNMENTS.  BUT UNIVERSITIES HAVE POLICIES THAT RESTRICT COLLABORATION AND HAVEN'T CAUGHT UP TO LIFE ONLINE."></Paragraph> */}
        {/* <Paragraph text = "FAXES ARE STRANGE, OLD MACHINES.  THEY’RE SIMILAR TO UNIVERSITY ADMIN."></Paragraph> */}
        {/* <Paragraph text = "ADMINISTRATORS HAVEN'T LISTENED TO PETITIONS.  BUT FLOODING AN OFFICE WITH THOUSANDS OF FAXES?  THAT'S A STATEMENT.  JOIN US TO PROTEST FULL TUITION IN ONLINE SCHOOL THIS YEAR. "></Paragraph> */}
        <Divider></Divider>

      </div>

      <div className="Cta-footer">
        <div className= "Footer-text"> This is a protest by TEACH.  Drop your email if you want to see what we make next. </div>
        <div className="Signup-wrapper"> 
        <SignUp></SignUp>
        </div>
        {/* <a href = "https://apps.apple.com/us/app/teach-learn-with-your-class/id1538387223" target = "_blank"> DOWNLOAD TEACH NOW</a>  */}
      </div>



      </div>
      

    </div>
  );
}

export default App;
