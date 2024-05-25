import React, {useEffect, useState} from 'react';

export function Home(){
    const[isVisible , setVisible] = useState(false);

    useEffect(()=>{
        setVisible(true)
    },[]);

    return(
      <div className={isVisible ? 'fade-in' : ''}>
      <h1>Welcome!</h1>
      <p>This is Elearning Platfroms.</p>
    </div> 
    );
};