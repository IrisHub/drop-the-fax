import React, {Component} from 'react'; 
// import ConfirmButton from '../components/confirmButton';


class ShareButton extends Component{

    constructor(props){
        super(props);
            this.state = {
                email: "",
                submitted: false,
                emailIsValid: true,

            };
        }

   
         handleOnClick = () => {
            if (navigator.share) {
              navigator
                .share({
                  title: 'DROP THE FAX',
                  text: `FAX FAX`,
                  url: 'https://dropthefax.com/',
                })
                .then(() => {
                  console.log('Successfully shared');
                })
                .catch(error => {
                  console.error('Something went wrong sharing the blog', error);
                });
            }
             console.log("test")
          };
     
    render() {
        const {name} = this.state
        return (
            <div className = "SignUpContainer"> 
    
                <div onClick={this.handleOnClick}> JOIN UP </div>

            </div>
        );
    }
  }
  
  export default ShareButton;
