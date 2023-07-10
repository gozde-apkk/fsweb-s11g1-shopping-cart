import { createContext, useState } from "react";



export const ProductContext = createContext ();

 const ProductProvider = ({children}) => {
    const [products, setProducts] = useState();
    const [cart, setCart] = useState([]);
    const addItem = (item) => {
        // verilen itemi sepete ekleyin
        setCart([...cart , item]);
      };
    
    
  return (
    <ProductContext.Provider value={{products , addItem}} >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
 