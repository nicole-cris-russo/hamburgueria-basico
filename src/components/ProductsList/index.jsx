import { Product } from "../Product";
import { Container } from "./styles.js";

export const ProductsList = ({
  listProducts,
  valueInput,
  productsAdd,
}) => {
  return (
    <Container id="List">
      <ul>
        {valueInput
          ? listProducts.map((product) => {
              return (
                product.name
                  .toLowerCase()
                  .includes(valueInput.toLowerCase().trim()) && (
                  <li key={product.id}>
                    <Product
                      product={product}
                      productsAdd={productsAdd(product)}
                    />
                  </li>
                )
              );
            })
          : listProducts.map((product) => {
              return (
                <li key={product.id}>
                  <Product
                    product={product}
                    productsAdd={productsAdd(product)}
                  />
                </li>
              );
            })}
      </ul>
    </Container>
  );
};
