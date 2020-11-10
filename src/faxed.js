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



const Faxed = ( {text, color} ) => {
  return(
      <div className="Faxed-Container"> 

    <Title text = "FAXED!"></Title>

    <SmallImage className = "Print"
    image = "./images/print@2x.gif"
  ></SmallImage> 

    <Line text = "YOU JUST FAXED THE OFFICE OF THE PRESIDENT AT STANFORD, BERKELEY, HARVARD, YALE, PRINCETON & MIT. "></Line>
    <Link to='/'>Send another one</Link>
  </div>
  )
}

export default Faxed;
