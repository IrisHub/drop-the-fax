import React, { useState, useEffect } from 'react';
import '../components/colleges.css';


const Colleges = () => {
//   const [colleges, setColleges] = useState(['STANFORD','USC','YALE','BROWN','UCLA','BERKELEY','CORNELL','MIT','PENN','HARVARD','PRINCETON','DARTMOUTH']);
  const [colleges, setColleges] = useState([]);

  const [timer, setTimer] = useState(0);

  const [isValid, setValid] = useState(false);


//

    useEffect(() => {
        var array = ['STANFORD','USC','YALE','BROWN','UCLA','BERKELEY','CORNELL','MIT','PENN','HARVARD','PRINCETON','DARTMOUTH'];
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
            <div className="Done"> ALL 13 FAXES SENT! </div>
        }

        {timer< 13 &&
            <div className="College">CURRENTLY FAXING:  {colleges} </div>

        }
        

        


    </div> 
  );
};

export default Colleges;