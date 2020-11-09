import React, {Component} from 'react'; 
import './signup.css';
// import ConfirmButton from '../components/confirmButton';
import validator from 'email-validator'
import axios from 'axios'




//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class SignUp extends Component{

    constructor(props){
        super(props);
            this.state = {
                email: "",
                submitted: false,
                emailIsValid: false,

            };
        }

    validateEmail = () => {
        this.setState({emailIsValid: validator.validate(this.state.email)})

    }

    changeHandler = e => {
        this.setState({email: e.target.value});
        // this.validateEmail()
    }

    submitHandler = e => {
        e.preventDefault()
        this.validateEmail()
        var api_key = "keybJqjUajlwC1xA6"

        if (this.state.emailIsValid){
            axios({
                method: 'post',
                url: `https://api.airtable.com/v0/appOddOn2WIRQROSc/Table%201?api_key=${api_key}`,
                data:{
                    fields: {
                        name: this.state.email
                    }
                }
              })

        }
        this.setState({submitted: true});

       
       

    }
     
    render() {
        const {name} = this.state
        return (
            <div className = "SignUpContainer"> 
    
            <form onSubmit= {this.submitHandler} className = "Form">
                <input className = "SignUpInput" type = "text" placeholder = "Enter your email" 
                value ={this.state.email} onChange = {this.changeHandler}>
                </input>
                <button type = "submit" className = {this.state.copied ? "hidden": "SignUpButton"} onClick = {this.myClick}> Join Waitlist
                </button>
            </form>

            {this.state.emailIsValid ? 
                    <React.Fragment>
                    <div className = "AfterSubmit">All signed up!</div>
                      </React.Fragment>
                     : null}

                    {!this.state.emailIsValid && this.state.submitted ? 
                    <React.Fragment>
                    <div className = "AfterSubmit">Please enter a valid email</div>
                      </React.Fragment>
                     : null}

            </div>
        );
    }
  }
  
  export default SignUp;
