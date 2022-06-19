import React from 'react'
import single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'


function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100'>
               <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="" />
               <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
               <p className='text-4xl font-bold text-center'>$149</p>

               <div className='text-center font-bold'>
                 <p className='py-2 border-b-2 mt-8 mx-8'>500 GB Storage </p>
                 <p className='py-2 border-b-2  mx-8'>1 Granted User</p>
                 <p className='py-2 border-b-2  mx-8'>Sign Up To 2 GB </p>
               </div>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>Start Trial</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100'>
               <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
               <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
               <p className='text-4xl font-bold text-center'>$149</p>

               <div className='text-center font-bold'>
                 <p className='py-2 border-b-2 mt-8 mx-8'>500 GB Storage </p>
                 <p className='py-2 border-b-2  mx-8'>1 Granted User</p>
                 <p className='py-2 border-b-2  mx-8'>Sign Up To 2 GB </p>
               </div>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 '>Start Trial</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100'>
               <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="" />
               <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
               <p className='text-4xl font-bold text-center'>$149</p>

               <div className='text-center font-bold'>
                 <p className='py-2 border-b-2 mt-8 mx-8'>500 GB Storage </p>
                 <p className='py-2 border-b-2  mx-8'>1 Granted User</p>
                 <p className='py-2 border-b-2  mx-8'>Sign Up To 2 GB </p>
               </div>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>Start Trial</button>
           </div>
        </div>
    </div>
  )
}

export default Cards