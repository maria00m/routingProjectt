import React from 'react'
import img from '../../images/avataaars.svg' 

export default function Home() {
  return <>
<body className='bg-[#1abc9c] h-screen '
>
 <div >
 <div className='flex justify-center  w-1/6 items-center mx-auto '><img src={img} alt='avatar' className='mt-5'/></div>
 </div>
 <div className='flex flex-col justify-center items-center'> 
  <h2 className='text-5xl mt-2  font-semibold '>Start Framework</h2>
  <div className="relative after:content-[''] after:absolute top-3  after:left-10 after:w-[70px] after:h-1 after:bg-white
before:content-[''] before:absolute bottom-1 before:right-10 before:w-[70px] before:h-1 before:bg-white
">
<div className='flex justify-center'><i className="fa-solid fa-star fa-sm" ></i></div>
</div>
<h2 className='mt-4'>Graphic Artist - Web Designer - Illustrator</h2>
 </div>
</body>

  

  </>
}
