//This stateful react component uses two props:  match.url from React router to generate unique URLs for each opppage,
// and page, which defines whether exiting the button should lead to scholarships or summer programs.
//  Given an ID of an opportunity, this component fetches the accompanying data, and displays it in a modal box that appears onClick from 
// Opps.JS or summer.js. 

import React, {Component} from 'react'; 
// import '../components/oppPage.css';
// import Backdrop from '../components/backdrop.js';

import { withRouter, page, Link, BrowserRouter as Router, Route } from 'react-router-dom';


class Faxed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: [],
            copied: false
            //id : this.props.match.params.id
        };
    }

    componentDidMount() {
        // //let idString = this.props.id;
        // fetch('/api' + this.props.match.url)
        //   .then(res => res.json())
        //   .then((data) => {
        //     this.setState({ content: data })
        //   })
        //   .catch(console.log)
      }
 
    render() {
        //console.log(idString)
                    //console.log(this.state.content)
        // console.log(this.props.match.params.id)
        var e;
        return (

            <div className = 'wrapper'>
                <div className = 'test'>Hi</div>

        
            </div>
        );
    }
  }
  
export default Faxed;

