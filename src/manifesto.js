import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";
import Subtitle from "./components/subtitle";





function Manifesto() {
  return (
    <div className="Manifesto">

    <Line text = "So online school has barely started, and it's already tiring, stressful and probably overworking you.  It's wearing us down too.  ">
    </Line>

    <Paragraph text = "We're 2 seniors at Berkeley (+ one Stanford student ❌🌲) who believe that the technology you use should inspire you.  "> 
    </Paragraph>

    <Paragraph text = "And as a first step, we're starting with an iOS app that helps you make the most of your time in online school.  "> 
    </Paragraph>

    <Line text = " We've crafted Iris as a love letter to the counterculture that Cal is built on.   We're building this in deference to the past student legends who fought for a world that gave them hope. ">
    </Line>

    <Paragraph text = "There's still a ways to go, but if you believe that this should be built, sign up for our waitlist for early access. You'll be among the first to get your hands on Iris and shape the direction we're headed."> 
    </Paragraph>

    {/* <Line text = "And as a first step, we're starting with an iOS app that helps you make the most of your time in online school.">
    </Line>

    <Line text = "If you believe that this should be built, sign up for our waitlist for early access.  You'll be among the first to get your hands on Iris and shape the direction we're headed.">
    </Line>

    {/* <Line text = "We're asking you to challenge this with us — but we could use your help.  We're building just for upperclassmen at UC Berkeley for now — because we're students there too. Sign up for our waitlist today!">
    </Line> */} 


    </div>
  );
}

export default Manifesto;
