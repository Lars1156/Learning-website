import React, {useEffect, useState} from 'react';
import '../css file/Home.css';


export function Home(){
    const[isVisible , setVisible] = useState(false);
     useEffect(()=>{setVisible(true)
    },[]);

    return(

      <div className={isVisible ? 'fade-in' : ''}>
         <h1>Welcome!</h1>
         <p>This is Elearning Platfroms.</p>
         <br />
         <button onClick={SubmitEvent} className='btn-corces'>Enroll Cources</button>
      </div>
    );
};