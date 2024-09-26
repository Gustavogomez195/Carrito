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
    },[])

  return (
    <dataContex.Provider value={{data, cart, setCart}}>
        {children}
    </dataContex.Provider>
  )
}

export default DataProvider