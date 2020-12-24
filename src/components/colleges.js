import React, { useState, useEffect } from 'react';
import '../components/colleges.css';
import '../faxed.css';

import Loading from '../components/loading.js';

import mail from '../images/mail.svg';
import cal from '../images/cal.svg';
import clock from '../images/time.svg';
import SignUp from "../signup";
import Divider from './divider.js';


import status from '../images/status.svg';
import SmallImage from "../small-img";
import ShareButton from './share-button';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import Line from './line';
import Highlighter from './highlighter';
import Pin from '../images/pin@3x.png';





const Colleges = ({date,count,time}) => {
//   const [colleges, setColleges] = useState(['STANFORD','USC','YALE','BROWN','UCLA','BERKELEY','CORNELL','MIT','PENN','HARVARD','PRINCETON','DARTMOUTH']);
  const [colleges, setColleges] = useState([]);

  const [timer, setTimer] = useState(0);

  const [isValid, setValid] = useState(false);


//

    useEffect(() => {
        var array = ['CHANCELLOR OF CAL CAROL CHRIST', 'PRES OF STANFORD MARC TESSIER-LAVIGNE', 'CHANCELOR OF UCLA GENE BLOCK', 'PRES. OF PRINCETON CHRISTINA PAXSON', 'PRES. OF HARVARD LAWRENCE BACOW',' PRES. OF USC CAROL FOLT','PRES. OF YALE PETER SALOVEY', 'PRES. OF PENN AMY GUTMANN','PRES. OF CORNELL MARTHA POLLACK', 'PRES. OF DARTMOUTH PHILIP HANLON','PRES. OF COLUMBIA LEE BOLINGER']

            
            
        // var array = ['STANFORD','USC','YALE','BROWN','UCLA','BERKELEY','CORNELL','MIT','PENN','HARVARD','PRINCETON','DARTMOUTH'];
        const interval = setInterval(() => {
        setColleges(colleges => array.pop());
    
        }, 1000)
        // if(array === undefined || array.length == 0){
            setValid(isValid => !isValid);
            console.log(isValid);

        //     console.log({isValid})
        // }

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
          setTimer(timer => timer + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, []);
  
    // useEffect(() => {
    //     var array = ['STANFORD','USC','YALE','BROWN','UCLA','BERKELEY','CORNELL','MIT','PENN','HARVARD','PRINCETON','DARTMOUTH'];
    //     const values = array.find(value => value[timer])

    //         setColleges(colleges => values)
    //     })


  return (
    <div className="College-container">

        {timer>12 &&
          <div className="Confirm-container"> 
            <div className="Done"> FAX CONFIRMATION </div>
              <div className= "Confirm"> 
              <div className="Confirm-1"> 

                {/* <div className="Confirm-text"> <img src={ clock}></img> {time} </div>
                <div className="Confirm-text"> <img src={ cal}></img> {date} </div> */}
                <div className="Confirm-text">{time}, {date} </div>

              </div>
                {/* <div className="Confirm-text"> UPDATED FAX TOTAL: {count} </div> */}
                <div className="Confirm-2"> 
                <div className="Confirm-text"> SENT TO: STANFORD, BERKELEY, UCLA, USC, MIT & EVERY IVY </div>
                <div className="Confirm-text"> STATUS: ALL FAXES DELIVERED WITHIN 48H</div>
                </div>

                <div className ="Count-container"> 
         
                  <img className="Print-img" src = {Pin}></img>
                  <div className="Count">{count} </div>
                </div>

                  {/* <SmallImage className = "Print"
                  image = "./images/thefax@2X.png"
              ></SmallImage>  */}
                
                <div className="Faxed-share">SHARE WITH YOUR FRIENDS TO GET TO 1 MILLION FAXES!</div>

                {timer>12 &&
                <ShareButton></ShareButton>
                }       

              
              </div> 
              <div className="Faxed-container-text"> 

                <Divider></Divider>

                {/* <Highlighter text = "WHAT’S NEXT?" ></Highlighter> */}
                {/* <Line text = "DROP YOUR EMAIL TO GET UPDATES WHEN WE HIT OUR GOAL." ></Line>

                {/* <ConfirmButton text = “COLLAB ON TEACH”></ConfirmButton> */}
                {/* <SignUp></SignUp>  */}
                <Link to='/' className='Back'>FAX AGAIN?</Link>
                <Divider></Divider>
                </div>



              </div> 
        }

        {timer< 12 &&
            <div className="Loading-container"> 
                <div className="College"> PREPARING FAX FOR: </div>
                <div className="College-text"> {colleges} </div>
                <Loading></Loading>
            </div>

        }
        

        


    </div> 
  );
};

export default Colleges;