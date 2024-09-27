import React from 'react'
import Card from './Card'
import Carrito from './Carrito'

function Home() {
  return (
    <div className='bg-stone-100 p-12 '> 
        <h1 className='text-3xl font-bold pb-6 lg:relative' >Desserts</h1>
        
        <div className='flex lg:justify-between justify-center md:justify-start'>
        <Card/>
        
        
        </div>
        <div className='relative md:absolute lg:absolute md:m-auto lg:m-auto md:left-[450px] lg:left-[850px] md:rigth-0  lg:rigth-0 md:top-10 lg:top-14'>

        <Carrito/>
        </div>

       
        
    </div>
  )
}

export default Home