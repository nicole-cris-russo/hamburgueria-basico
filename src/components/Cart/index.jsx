import { useContext } from "react";
import { Container, Box, DivEmpty } from "./styles.js";
import { ProductContext } from "../../contexts/productContext";
import { ListProductsInCart } from "../ListProductsInCart";

export const Cart = () => {
  const { productInCart } = useContext(ProductContext)
  let lengthCart = productInCart.length

  return (
    <Container id="Cart" lengthcart={lengthCart}>
      <Box>
        <h3>Carrinho de compras</h3>
      </Box>
      {productInCart.length > 0 ? (
        <ListProductsInCart/>
      ) : (
        <DivEmpty>
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </DivEmpty>
      )}
    </Container>
  );
};
