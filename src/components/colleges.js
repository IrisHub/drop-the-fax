import React, { useState, useEffect } from 'react';
import '../components/colleges.css';


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
        {timer>13 &&
          <React.Fragment> 
              <div className="Done"> 13 SCHOOLS FAXED! </div>
              <div className="Confirm"> TOTAL FAXES SENT: {count} </div>
              <div className="Confirm"> DATE: {date} </div>
              <div className="Confirm"> TIME: {time} </div>
              {/* <div className="Confirm"> SENT TO: STANFORD, UC BERKELEY, UCLA, USC, HARVARD, MIT, YALE, PRINCETON, DARTMOUTH, BROWN, CORNELL, COLUMBIA, PENN </div> */}

          </React.Fragment>

        }

        {timer< 13 &&
            <React.Fragment> 
                <div className="College">CURRENTLY FAXING: </div>
                <div className="College"> {colleges} </div>
            </React.Fragment>

        }
        

        


    </div> 
  );
};

export default Colleges;