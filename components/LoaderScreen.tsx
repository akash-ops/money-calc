"use client"

import React, { useState } from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/homeanimation.json'
const Loader = () => {
    const [isStopped, setisStopped] = useState(false);
    const [isPaused, setisPaused] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='grid place-items-center'>
        <Lottie options={defaultOptions}

              isStopped={isStopped}
              isPaused={isPaused}/>
    </div>
  )
}

export default Loader