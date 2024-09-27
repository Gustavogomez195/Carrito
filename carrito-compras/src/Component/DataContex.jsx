import {  createContext, useEffect, useState } from "react"

export const dataContex = createContext()

const DataProvider = ({children}) => {
    const [data, setData]=useState([])
    const [cart, setCart]=useState([])
    

    useEffect(()=>{
        fetch("/data.json")
        .then((response)=> response.json())
        .then((data)=> setData(data))
        .catch((error)=> console.log("error fetch data", error ));
    },[]);

    
  const buyProducts = (item) => {
    const itemInCart = cart.find((product) => product.name === item.name);

    if (itemInCart) {
      
      setCart(
        cart.map((product) =>
          product.name === item.name
            ? { ...product, quanty: product.quanty + 1 }
            : product
        )
      );
    } else {
    
      setCart([...cart, { ...item, quanty: 1 }]);
     
    }
  };

  const incrementQuantity = (item) => {
    setCart(
      cart.map((product) =>
        product.name === item.name
          ? { ...product, quanty: product.quanty + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (item) => {
    const itemInCart = cart.find((product) => product.name === item.name);

    if (itemInCart.quanty > 1) {

      setCart(
        cart.map((product) =>
          product.name === item.name
            ? { ...product, quanty: product.quanty - 1 }
            : product
        )
      );
    } else {
      
      setCart(cart.filter((product) => product.name !== item.name));
      
    }
  };

    

  return (
    <dataContex.Provider value={{data, cart, setCart, buyProducts, incrementQuantity, decrementQuantity}}>
        {children}
    </dataContex.Provider>
  )
}

export default DataProvider