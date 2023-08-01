import React, { useEffect, useState } from 'react';

const LandingCounter = ({count}) => {

    const [courseCounter, setCourseCounter] = useState(0);

    useEffect(() => {
  
        const intarval = setInterval(() => {
  
            setCourseCounter(prevCounter => prevCounter + 1);
  
        }, 1);
  
      if (courseCounter === count) {
        clearInterval(intarval);
      }
  
      return () => clearInterval(intarval);
  
    }, [courseCounter]);

    return (
        <span class="landing-status__count">{courseCounter}</span>
    );
};

export default LandingCounter;