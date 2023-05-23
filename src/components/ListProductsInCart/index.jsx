import { useContext } from "react";
import { ProductCart } from "../ProductCart";
import { ValueTotal } from "../ValueTotal";
import { ProductContext } from "../../contexts/productContext";
import { Box } from "./styles";

export const ListProductsInCart = () => {
    const { productInCart } = useContext(ProductContext)

    return(
        <>
            <Box>
                <ul>
                {productInCart.map((product) => {
                    return (
                    <li key={product.id}>
                        <ProductCart product={product} />
                    </li>
                    );
                })}
                </ul>
            </Box>
            <Box>
                <ValueTotal />
            </Box>
        </>
    )
}