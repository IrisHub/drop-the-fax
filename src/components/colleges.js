import React, { useState, useEffect } from 'react';
import '../components/colleges.css';
import Loading from '../components/loading.js';

import mail from '../images/mail.svg';
import cal from '../images/cal.svg';
import clock from '../images/time.svg';


import status from '../images/status.svg';
import SmallImage from "../small-img";




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
          <React.Fragment> 
              <div className="Done"> FAX CONFIRMATION </div>
              <div className= "Confirm"> 
              <div className="Confirm-1"> 

                <div className="Confirm-text"> <img src={ clock}></img> {time} </div>
                <div className="Confirm-text"> <img src={ cal}></img> {date} </div>
              </div>
                {/* <div className="Confirm-text"> UPDATED FAX TOTAL: {count} </div> */}
                <div className="Confirm-2"> 
                <div className="Confirm-text"> <img src={ status}></img> SENDING 10PM - 4AM VIA FAX.PLUS </div>
                <div className="Confirm-text"> <img src={ mail}></img> STANFORD, BERKELEY, UCLA, USC, MIT & EVERY IVY </div>
                </div>

                  <SmallImage className = "Print"
                  image = "./images/thefax@2X.png"
              ></SmallImage> 
                
                <div className="Faxed-share">SHARE WITH YOUR FRIENDS TO GET TO 1 MILLION FAXES!</div>

              </div> 

              {/* <div className="Confirm"> SENT TO: STANFORD, UC BERKELEY, UCLA, USC, HARVARD, MIT, YALE, PRINCETON, DARTMOUTH, BROWN, CORNELL, COLUMBIA, PENN </div> */}

          </React.Fragment>

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