import React from 'react'
import Card from './Card'
import Carrito from './Carrito'

function Home() {
  return (
    <div className='bg-stone-100 p-12 '> 
        <h1 className='text-3xl font-bold pb-6 relative' >Desserts</h1>
        <div className='absolute m-auto left-[850px] rigth-0 top-14'>

        <Carrito/>
        </div>
        
        <div className='flex justify-between'>
        <Card/>
        
        
        </div>

       
        
    </div>
  )
}

export default Home