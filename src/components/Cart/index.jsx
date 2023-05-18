import { ProductCart } from "../ProductCart";
import { ValueTotal } from "../ValueTotal";
import { Container, Div, DivEmpty } from "./styles.js";

export const Cart = ({
  productInCart,
  removeCart,
  setCartValueTotal,
  cartValueTotal,
  removeAllCart,
}) => {
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
                    <ProductCart product={product} removeCart={removeCart} />
                  </li>
                );
              })}
            </ul>
          </Div>
          <Div>
            <ValueTotal
              productInCart={productInCart}
              setCartValueTotal={setCartValueTotal}
              cartValueTotal={cartValueTotal}
              removeAllCart={removeAllCart}
            />
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
