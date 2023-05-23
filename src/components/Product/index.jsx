import { useContext } from "react";
import { Container, BoxInfos } from "./styles";
import styles from "./styles.module.css";
import { ProductContext } from "../../contexts/productContext";

export const Product = ({
  product,
}) => {
  const { productsAdd } = useContext(ProductContext)

  return (
    <Container>
      <img src={product.img} alt={product.name} />
      <BoxInfos>
        <h3>{product.name}</h3>
        <span className={styles.Category}>{product.category}</span>
        <span className={styles.Price}>R$ {product.price.toFixed(2)}</span>
        <button
          onClick={() => {
            productsAdd(product);
          }}
        >
          Adicionar
        </button>
      </BoxInfos>
    </Container>
  );
};
