import React, { useState } from 'react';
import { useContext } from "react";
import { dataContex } from "./DataContex";
import Carritovacio from "/assets/images/illustration-empty-cart.svg";
import Modal from './Modal';

const Carrito = () => {
    const { cart, setCart } = useContext(dataContex);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirm = () => {
       
        setCart([]);
        setIsModalOpen(false); 
      };
    

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quanty), 0);
    };
    const removeProduct = (itemToRemove) => {
        setCart(cart.filter(item => item !== itemToRemove));
        
        
    };

    return ( 
        <div className='bg-white w-80  rounded-xl p-4'>
            <h4 className='text-xl font-medium text-orange-700'>Your Cart</h4>
            {cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className='pt-2 pb-2 border-b'>
                            <p className='text-md font-medium '>{item.name}</p>
                            <div className='flex justify-between'>

                            <div className='font-medium '>
                            <span className='text-orange-700 pr-4'>{item.quanty}x  </span> 
                             <span className='text-gray-500 pr-4' >@${item.price} </span>
                            <span className='text-gray-600'>${item.price * item.quanty}</span>   {/* Muestra el precio por cantidad */}
                            </div>
                           
                            <svg onClick={()=>removeProduct(item)} className='border border-gray-600 hover:border-black rounded-full w-5 h-5 p-1 text-gray-600 cursor-pointer hover:text-black' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 10 10"><path  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
                            </div>
                        </div>
                    ))}
                    <div className="pt-4 flex justify-between items-center pb-4">
                        <h5 className="text-md text-gray-600 font-medium">Order Total</h5>
                        <p className='text-2xl font-bold'> ${calculateTotal()}</p>
                    </div>
                    <p className='flex items-center justify-center bg-stone-100 p-4 rounded-lg mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                    This is a <span className='font-medium px-1'>carbon-neutral</span> delivery
                    </p>
                    <button  onClick={() => setIsModalOpen(true)} className='bg-orange-700 text-white font-medium rounded-full w-full h-12 hover:bg-orange-800 transition duration-200'>Confirmar order</button>
                    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        cart={cart}
      />
                    
                </>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-40' src={Carritovacio} alt="carrito vacio" />
                    <p className='font-medium text-stone-500'>Your added items will appear here</p>
                </div>
            )}
        </div>
    );
}

export default Carrito;
