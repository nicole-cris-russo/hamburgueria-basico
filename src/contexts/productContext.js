import { createContext } from "react";

const ProductContext = createContext({})

export const ProductProvider = (children) => {
    
    return (
        <ProductContext.Provider value={0}>
            {children}
        </ProductContext.Provider>
    )
}