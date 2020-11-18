import axios from 'axios';
import React, {Component} from 'react'; 
import '../components/label.css';
// import ConfirmButton from '../components/confirmButton';


//refactor into a controlled component 
//on click, go grey
//or on click, disappear
//on hover for add, go blue
//Make long for add button

class Label extends Component{

    constructor(props){
        super(props);
            this.state = {
                //ccareful w array here
                count: [],
                copied: false
            };
        }
    changeHandler = e => {
        this.setState({name: e.target.value});
    }

    componentDidMount(){
        // axios.post('https://s27ryscmt6.execute-api.us-west-1.amazonaws.com/staging')
        axios.post('https://l2wmf923e0.execute-api.us-west-1.amazonaws.com/fns/count')
        .then((success) => {
            this.setState({count: success.data })
            // this.props.currView.setState({ curr: "User: " + success.data.first_name + " " + success.data.last_name });
            }, function (err) {
            console.log("err"+err); //prints ‘failure reason’ if rejected’
            });
    }


    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
       
    }
     
    render() 
    
    {
        console.log(this.state.count);

        const {name} = this.state
        return (
            <div className = "FormContainer"> 
            
            {/* <div className = "Label">Count is{this.state.count} </div> */}
            <div className = "Label">{this.state.count} FAXES </div>

          
          
            </div>
        );
    }
  }
  
  export default Label;
  //notee: myClick goes nowhere