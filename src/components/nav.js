import React, {Component} from 'react'; 
import logo from '../images/logo@2x.svg';

//react router for routes
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../components/nav.css';



class MyNavbar extends React.Component{

  constructor(props){
    super(props);
        this.state = {
            active: false
        };
    }
 
  render() {
   
      return (
          <div className = 'Navbar'>
              <img className = 'logo' src={logo} alt=""></img> 
              
               {/* <div className = "nav-text" id = "work"><Link className = "nav-link" to="/"> Work</Link></div>
              <div className = "nav-text" id = "about"> <Link className = "nav-link" to="/about">About</Link> </div>
  */}

          </div>
    


      );
  }
}

export default MyNavbar;
