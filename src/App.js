import React, { useState ,useEffect} from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./components/context/ProductContext";
import { CartContext } from "./components/context/CartContext";


function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCart = [...cart , item]
    setCart(newCart);
    console.log("NewCart :" , newCart);
  };
  const deleteItem = (index) => {
    const removeArr = [...cart]
     removeArr.splice(index, 1);
    setCart(removeArr);
  };


  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    basket ? setCart(basket) : setCart([])
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(cart));
  }, [cart]);

   // eslint-disable-next-line no-unused-vars
   //const setProducts = /* some value */;
 
  return (
    <ProductContext.Provider value={{products , addItem} } >
       <CartContext.Provider value={{cart , deleteItem}} >
       
       <div className="App">
         <Navigation  />
   
         {/* Routelar */}
         <main className="content">
           <Route exact path="/">
             <Products  />
           </Route>
   
           <Route path="/cart">
             <ShoppingCart  />
           </Route>
         </main>
       </div>
       </CartContext.Provider>
     
    </ProductContext.Provider>
    );
   }
   
   export default App;
   