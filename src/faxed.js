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
import axios from 'axios';


//Hello intrepid Computer Science explorer!  You're likely wondering just how we fax people in the first place.
//You've come to the right place. You'll notice our code doesn't immediately send out a fax onClick.
//That's intentional.  Instead of sending individually, we batch send using third-party software.  
//Maybe a little less fun, but then again... there's not much fun when it comes to fax machines.  Keep exploring :) 


class Faxed extends Component{

    constructor(props){
        super(props);
            this.state = {
                new_count: false
            };
        }
  

    componentDidMount(){
        // axios.post('https://s27ryscmt6.execute-api.us-west-1.amazonaws.com/staging')
        axios.post('https://l2wmf923e0.execute-api.us-west-1.amazonaws.com/fns/fax')
        .then((success) => {
            this.setState({new_count: success.data })
            // this.props.currView.setState({ curr: "User: " + success.data.first_name + " " + success.data.last_name });
            }, function (err) {
            console.log("err"+err); //prints ‘failure reason’ if rejected’
            });
    }
     
    render() {
        console.log(this.state.new_count)
        return (
            <div className="Faxed-Container"> 

            <Title text = "YOU JUST SENT 10 FAXES TO 10 UNIVERSITY PRESIDENTS!"></Title>
        
            <SmallImage className = "Print"
            image = "./images/print@2x.gif"
          ></SmallImage> 
        
            <div className="Faxed-Container-CTA">
                <div className = "Faxed-Text" >YOU JUST FAXED THE OFFICE OF THE PRESIDENT AT STANFORD, BERKELEY, MIT & EVERY IVY LEAGUE PRES. YOU'RE A COLLABORATION CHAMPION.</div>
                <Highlighter text = "WE'RE TEACH-- A NEW APP AT STANFORD THAT LETS YOU COLLAB ANONYMOUSLY W/ UR CLASS"></Highlighter>
                <a className="Button" href = "https://apps.apple.com/us/app/teach-learn-with-your-class/id1538387223" target = "_blank"> <ConfirmButton text = "DOWNLOAD TEACH + COLLAB"></ConfirmButton> </a> 
        
                {/* <ConfirmButton text = "COLLAB ON TEACH"></ConfirmButton> */}
                <Link to='/' className="Back">FAX AGAIN?</Link>
                <Divider></Divider>
            </div>
            
          </div>
         
        );
    }
  }
  
  export default Faxed;
