import { createContext } from "react";
import api from "../services/api";
import { useEffect, useState } from "react";

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [listProducts, setListProducts] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [productInCart, setProductInCart] = useState([]);
    const [cartValueTotal, setCartValueTotal] = useState(0);

    useEffect(() => {
        api.get("products").then((response) => setListProducts(response.data));
      }, []);

    const productsAdd = (product) => {
        let validation = productInCart.some((prod) => prod === product);
        if (validation) {
          return;
        } else {
          setProductInCart((oldProductsAdd) => [product, ...oldProductsAdd]);
        }
    };
    
    const removeCart = (id) => {
    setProductInCart(productInCart.filter((product) => product.id !== id));
    };

    const removeAllCart = () => {
    setProductInCart([]);
    };
    
    return (
        <ProductContext.Provider value={
            {listProducts, 
            setListProducts, 
            valueInput,
            setValueInput,
            productInCart,
            setProductInCart,
            cartValueTotal,
            setCartValueTotal,
            productsAdd,
            removeCart,
            removeAllCart
            }}>
            {children}
        </ProductContext.Provider>
    )
}