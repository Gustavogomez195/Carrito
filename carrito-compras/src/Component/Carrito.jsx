import React from 'react'
import { useContext } from "react"
import { dataContex } from "./DataContex"
import CartTotal from './CartTotal'
import Carritovacio from "/assets/images/illustration-empty-cart.svg"

const Carrito = () => {

    const { cart } = useContext(dataContex)

    return ( 
        <div className='bg-white w-80 h-screen rounded-xl p-4'>
            <h4 className='text-xl font-medium text-orange-700'>Your Cart</h4>
            {cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className='pt-2 pb-2 border-b'>
                            <p className='text-md font-medium'>{item.name}</p>
                            <p className='text-gray-400 font-medium '>${item.price}</p>
                        </div>
                    ))}
                    <CartTotal />
                </>
            ) : (
                <div className='flex flex-col justify-center items-center'>

                    <img className='w-40' src={Carritovacio} alt="carrito vacio" />
                    <p className='font-medium  text-stone-500'>Your added items will appear here</p>
                </div>
            )}
        </div>
    )
}

export default Carrito
