import React, {Component} from 'react'; 
import './faxbutton.css';
import axios from 'axios';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';


// import ConfirmButton from '../components/confirmButton';


//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class FaxButton extends Component{

    constructor(props){
        super(props);
            this.state = {
                new_count: false
            };
        }
    // changeHandler = e => {
    //     this.setState({name: e.target.value});
    // }

    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
        axios.post('https://l2wmf923e0.execute-api.us-west-1.amazonaws.com/fns/fax')
        .then((success) => {
            this.setState({new_count: success.data })
            }, function (err) {
            console.log("err"+err); //prints ‘failure reason’ if rejected’
            });
    }
     
    render() {
        console.log(this.state.new_count)
        return (
            <div className = "FormContainer"> 
                <Link to= "/fax" className="Button" onClick = {this.submitHandler}> 

                <button type = "submit" className = "FormButton"> Increment Count  </button>
                </Link>
            </div>
        );
    }
  }
  
  export default FaxButton;
