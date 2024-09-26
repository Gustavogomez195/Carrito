import { useContext } from "react"
import { dataContex } from "./DataContex"

const CartTotal = () => {

    const {cart}= useContext(dataContex)
    const total = cart.reduce((acc, el)=> acc + el.price,0)  
  return (
    <div className="flex justify-between items-center pt-2 pb-2">
        <p className="text-gray-400 text-md ">Orden Total </p>
        <p className="font-bold text-2xl">${total}</p>
    </div>
  )
}

export default CartTotal