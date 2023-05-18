import { Container, Box } from "./styles";
import { useEffect } from "react";

export const ValueTotal = ({
  productInCart,
  setCartValueTotal,
  cartValueTotal,
  removeAllCart,
}) => {
  useEffect(() => {
    setCartValueTotal(productInCart.reduce((a, b) => a + b.price, 0));
  }, [productInCart, setCartValueTotal]);
  return (
    <Container>
      <Box>
        <span>Total</span>
        <span>R$ {cartValueTotal.toFixed(2)}</span>
      </Box>
      <button onClick={() => removeAllCart()}>Remover Todos</button>
    </Container>
  );
};
