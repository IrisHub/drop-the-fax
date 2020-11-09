import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './footer.css';
import '../index.css';

// import Social from "./components/social";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import iris from '../images/irislogodark@6x.png';


const Contact = styled.div`
  margin-bottom: 0.5em;
`;


const Footer = ( {title, color} ) => {
  return(

    <div className = "footer-wrapper"> 
        <div className = "footer-section-wrapper">
            <div className = "section-one"> 
                <div className = "section-two-title">Iris</div>
                {/* <img className = 'logo' src={iris} alt=""></img> */}

                <div className = "section-two-text">Iris helps you make the most of your time in online school.</div>
                <div className = "section-two-text">© 2020 Iris Co.</div>

                {/* <Social image = "fab fa-dribbble"
                link = "https://dribbble.com/samjgorman"/>
                <Social image = "fab fa-medium-m"
                link = "https://medium.com/@gormansam"/>
                <Social image = "fab fa-linkedin-in"
                link = "https://www.linkedin.com/in/gormansam/"/>
                 <Social image = "fab fa-github"
                link = "https://github.com/samjgorman"/> */}
                {/* <a href = {Resume} target = "_blank">📝 See what we're building</a> */}


            </div>


            <div className = "section-two"> 
                <div className = "section-two-title">Company</div>
                    <div className = "section-two-text" >🔒   <Link className = "footerLink" to = "/privacy"> Privacy </Link></div>
                    <div className = "section-two-text">🤖   <Link className = "footerLink"to = "/tos"> Terms of Service </Link></div>
                    <div className = "section-two-text">🥺   <Link className = "footerLink"to = "/community"> Community Guidelines </Link></div>

                    {/* <div className = "section-two-study">💸   <Link className = "footerLink" to = "/case"> UI design with <b> Microscholarships </b></Link> </div>
                    <div className = "section-two-study">🎨   <Link className = "footerLink" to = "/figma-kp"> More UI design with <b> Figma Plugins </b></Link> </div> */}

            </div>

        </div>
        <div className = "footer-text">Built in Berkeley with 🐻 </div>
    </div>
  
  )
}

export default Footer;