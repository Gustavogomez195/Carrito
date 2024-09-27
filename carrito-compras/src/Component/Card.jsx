import { useContext} from "react";
import { dataContex } from "./DataContex";
import carrito from "/assets/images/icon-add-to-cart.svg";

function Card() {
  const { data, cart, buyProducts, incrementQuantity, decrementQuantity } = useContext(dataContex);
   

  const isProductInCart = (item) => {
    return cart.some(cartItem => cartItem.name === item.name);
};

 
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index}>
          <div className="w-60 relative">
            <img
              className="rounded-xl"
              src={item.image.desktop}
              alt={item.name}
            />

            {isProductInCart(item) ? (
              <button className="flex justify-between items-center absolute top-20 bottom-0 left-8 m-auto border rounded-full px-4 w-44 h-10 bg-orange-700">
             
                <svg
                  onClick={() => decrementQuantity(item)}
                  className="text-white hover:text-orange-700 border rounded-full w-5 h-5 p-1 hover:bg-white cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="currentColor"
                  viewBox="0 0 10 2"
                >
                  <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>

                
                <span className="text-white">
                  {cart.find((product) => product.name === item.name)?.quanty}
                </span>

                
                <svg
                  onClick={() => incrementQuantity(item)}
                  className="text-white hover:text-orange-700 border rounded-full w-5 h-5 p-1 hover:bg-white cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  viewBox="0 0 10 10"
                >
                  <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => buyProducts(item)}
                className="flex justify-center items-center absolute top-20 bottom-0 left-8 m-auto border border-gray-500 rounded-full px-8 h-10 bg-white gap-2 hover:border-orange-700 hover:text-orange-700"
              >
                <img src={carrito} alt="carrito" /> Add to Cart
              </button>
            )}

            <div className="pt-8 pb-8">
              <p className="text-gray-400 font-medium">{item.category}</p>
              <p className="font-medium text-lg">{item.name}</p>
              <p className="font-medium text-lg text-orange-700">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
