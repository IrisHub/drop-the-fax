import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";
import MyNavbar from './components/nav.js';
import Highlighter from './components/highlighter';
import Marquee from './components/marquee';
import RevMarquee from './components/reverse-marquee';



import Divider from './components/divider.js';
import styled, { css } from 'styled-components'
import Title from './components/title.js'



const Wrapper  = styled.div`
padding-top: 5%;
padding-bottom: 5%;


margin-left: 30%;
margin-right: 30%;
`;


const Faq = ( ) => {
    return(
        <React.Fragment> 
        <Marquee></Marquee>
        <MyNavbar></MyNavbar>

        <div className="Text-container"> 

            <Title text = "FAQ"></Title>
            <Highlighter text = "Q: DOES THIS REALLY SEND FAXES?"></Highlighter>
            <Paragraph text = "A: Yes. press fax and send to 20 university presidents from Stanford, Cal, UCLA, USC, MIT, every Ivy & more."></Paragraph>

            <Highlighter text = "Q: WHY NOW?"></Highlighter>
            <Paragraph text = "A: Bills for the next semester just arrived.  Emails, petitions and protests got ignored. It is hard to ignore a tsunami of papers flying out of a house-sized machine that sounds like a jackhammer."></Paragraph>

            {/* <Highlighter text = "Q: WHO ARE U?"></Highlighter>

            <Paragraph text = "A: College students from California. COVID took away 99% of the value of college, but took away 0% of the price."></Paragraph> */}

            <Highlighter text = "Q: *UNIVERSITY PRESIDENT UNPLUGS FAX MACHINE* "></Highlighter>
            <Paragraph text = " A:  Faxes are received online in addition to paper, so unplug away.  It's about the statement we're making as students send 1,000,000 faxes together. "></Paragraph>

            <Highlighter text = "Q: WHAT ABOUT THE TREES???"></Highlighter>
            <Paragraph text = " A: We're not here to destroy the environment. We're personally donating to onetreeplanted.org to offset the papers we're printing."></Paragraph>
        
        </div>

        <RevMarquee></RevMarquee>


        </React.Fragment>

    
    )
  }
  
  export default Faq;
  