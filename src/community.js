import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import styled, { css } from 'styled-components'
import Title from './components/title.js'



const Wrapper  = styled.div`
padding-top: 5%;
padding-bottom: 5%;


margin-left: 30%;
margin-right: 30%;
`;


const Community = ( {image, caption, color} ) => {
    return(
        <React.Fragment> 

        <MyNavbar></MyNavbar>
        <Wrapper>

        <Title text = "Community Guidelines"></Title>
        <Line text = "Last Updated: October 30, 2020 "
        ></Line>

        <Paragraph text = "We want ANSR to be a safe and positive experience for everyone. We reserve the right to decide, in our sole discretion, what content violates that spirit and will not be permitted on the platform."
        ></Paragraph>

        <Line text = "Harassment and Bullying"
        ></Line>

        <Paragraph text = "We prohibit bullying or harassment of any kind."
        ></Paragraph>

        <Line text = 'Threats, Violence and Harm'
        ></Line>

        <Paragraph text = 'Encouraging violence or dangerous behavior is prohibited — never threaten to harm a person, a group of people, or someone’s property.'
        ></Paragraph>

        <Paragraph text = 'We don’t allow the glorification of self-harm, including the promotion of self-injury or eating disorders.'
        ></Paragraph>

        <Paragraph text = 'Impersonation, Deceptive Practices and False Information'
        ></Paragraph>


        <Line text = 'Pretending to be someone you’re not — like pretending to be a student as a TA— or attempting to deceive people about who you are is not allowed.'
        ></Line>


        <Line text = 'Illegal Content'
        ></Line>


        <Line text = 'Don’t use ANSR for any illegal activities — including to buy or sell illegal drugs, contraband, counterfeit goods, or illegal weapons.'
        ></Line>

        <Line text = 'We prohibit the promotion and use of certain regulated goods, as well as the depiction or promotion of criminal activities.'
        ></Line>


        <Line text = 'Terrorism, Hate Groups, and Hate Speech'
        ></Line>


        <Line text = 'Terrorist organizations and hate groups are prohibited from using our platform and we have no tolerance for content that advocates or advances violent extremism or terrorism.'
        ></Line>

        <Line text = 'Hate speech or content that demeans, defames, or promotes discrimination or violence on the basis of race, color, caste, ethnicity, national origin, religion, sexual orientation, gender identity, disability, or veteran status, immigration status, socio-economic status, age, weight or pregnancy status is prohibited.'
        ></Line>



        <Line text = 'If you violate these Community Guidelines, we may remove the offending content, terminate or limit the visibility of your account, and/or notify law enforcement. If your account is terminated for violating our Terms of Service or these Guidelines, you may not use Snapchat again. Please take these Guidelines seriously and honor them in the spirit in which they are intended.'
        ></Line>


        </Wrapper>
        </React.Fragment>

    
    )
  }
  
  export default Community;
  