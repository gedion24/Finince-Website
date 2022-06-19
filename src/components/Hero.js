import React from 'react'
import Typed from 'react-typed';



function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px]mt-[-96px]w-fullh-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 '> GROWING WITH DATA ANALYTICS </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div>
          <div className='flex justify-center items-center'>

             <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast,flexible financing for</p>
         <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={[ 'BTB' , 'BTC' , 'SASS' ]} 
              typedspeed={120} 
              backspeed={140} 
              loop />
          </div>
               <div>
                 <p className='md:2xl  text-xl font-bold text-gray-500'>Monintor your data anlytics to increase revenune for BTB , BTC & SASS platforms  </p>
                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
               </div>

        </div>
    
        </div>
  


    </div>
  )
}

export default Hero