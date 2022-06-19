import React from 'react'
import  Laptop  from '../assests/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />

             <div className='flex  flex-col justify-center'>
             <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
             <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>manage data Analytics Centerally</h1>
             <p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             Illo voluptatibus ducimus aliquid sunt minima ipsam recusandae alias 
             quidem quia! Rem eaque corporis iure quasi magnam. Dolor quos voluptate 
             consequatur quisquam?</p>
             <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
             </div>
            
        </div>
    
</div>
  )
}

export default Analytics