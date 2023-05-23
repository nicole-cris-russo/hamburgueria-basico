import { useContext } from "react";
import { ProductCart } from "../ProductCart";
import { ValueTotal } from "../ValueTotal";
import { Container, Div, DivEmpty } from "./styles.js";
import { ProductContext } from "../../contexts/productContext";

export const Cart = () => {
  const { productInCart } = useContext(ProductContext)

  return (
    <Container id="Cart" productInCart={productInCart}>
      <Div>
        <h3>Carrinho de compras</h3>
      </Div>
      {productInCart.length > 0 ? (
        <>
          <Div>
            <ul>
              {productInCart.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCart product={product} />
                  </li>
                );
              })}
            </ul>
          </Div>
          <Div>
            <ValueTotal/>
          </Div>
        </>
      ) : (
        <DivEmpty>
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </DivEmpty>
      )}
    </Container>
  );
};
