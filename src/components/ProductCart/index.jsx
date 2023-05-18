import { Container, BoxOne, BoxTwo, BoxThree } from "./styles.js";

export const ProductCart = ({ product, removeCart }) => {
  return (
    <Container>
      <BoxOne>
        <img src={product.img} alt={product.name} />
      </BoxOne>
      <BoxTwo>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
      </BoxTwo>
      <BoxThree>
        <button
          onClick={() => {
            removeCart(product.id);
          }}
        >
          Remover
        </button>
        <span></span>
      </BoxThree>
    </Container>
  );
};
