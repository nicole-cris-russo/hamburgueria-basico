import { useContext } from "react";
import { Product } from "../Product";
import { Container } from "./styles.js";
import { ProductContext } from "../../contexts/productContext";

export const ProductsList = () => {
  const {valueInput, listProducts} = useContext(ProductContext)

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
                  />
                </li>
              );
            })}
      </ul>
    </Container>
  );
};
