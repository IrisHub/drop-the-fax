//This stateful react component uses two props:  match.url from React router to generate unique URLs for each opppage,
// and page, which defines whether exiting the button should lead to scholarships or summer programs.
//  Given an ID of an opportunity, this component fetches the accompanying data, and displays it in a modal box that appears onClick from 
// Opps.JS or summer.js. 

import React, {Component} from 'react'; 
// import '../components/oppPage.css';
// import Backdrop from '../components/backdrop.js';

import styled, { css } from 'styled-components';
import logo from './logo.svg';
import './faxed.css';
import Manifesto from "./manifesto";

import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Footer from './components/footer';
import Line from './components/line';
import Paragraph from './components/line';
import Highlighter from './components/highlighter';

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

//Hello intrepid Computer Science explorer!  You're likely wondering just how we fax people in the first place.
//You've come to the right place. You'll notice our code doesn't immediately send out a fax onClick.
//That's intentional.  Instead of sending individually, we batch send using third-party software.  
//Maybe a little less fun, but then again... there's not much fun when it comes to fax machines.  Keep exploring :) 


const Faxed = ( {text, color} ) => {
  return(
      <div className="Faxed-Container"> 

    <Title text = "FAXED!"></Title>

    <SmallImage className = "Print"
    image = "./images/print@2x.gif"
  ></SmallImage> 

    <div className="Faxed-Container-CTA">
        <div className = "Faxed-Text" >YOU JUST FAXED THE OFFICE OF THE PRESIDENT AT STANFORD, BERKELEY, HARVARD, YALE, PRINCETON & MIT. YOU'RE A COLLABORATION CHAMPION.</div>
        <a className="Button" href = "https://apps.apple.com/us/app/teach-learn-with-your-class/id1538387223" target = "_blank"> <ConfirmButton text = "COLLAB ON TEACH"></ConfirmButton> </a> 

        {/* <ConfirmButton text = "COLLAB ON TEACH"></ConfirmButton> */}
        <Link to='/' className="Back">SEND MORE</Link>

    </div>
    
  </div>
  )
}

export default Faxed;
