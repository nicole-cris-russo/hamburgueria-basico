import "./App.css";
import Global from "./components/styles/global.js";
import api from "./services/api.js";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [productInCart, setProductInCart] = useState([]);
  const [cartValueTotal, setCartValueTotal] = useState(0);
  // currentValue ^

  const productsAdd = (product) => {
    let validation = productInCart.some((prod) => prod === product);
    if (validation) {
      return;
    } else {
      setProductInCart((oldProductsAdd) => [product, ...oldProductsAdd]);
    }
  };

  const removeCart = (id) => {
    setProductInCart(productInCart.filter((product) => product.id !== id));
  };

  const removeAllCart = () => {
    setProductInCart([]);
  };

  useEffect(() => {
    api.get("products").then((response) => setListProducts(response.data));
  }, []);

  return (
    <div className="App">
      <Global />
      <Header setValueInput={setValueInput} />
      <main>
        <ProductsList
          listProducts={listProducts}
          valueInput={valueInput}
          productsAdd={() => productsAdd}
        />
        <Cart
          productInCart={productInCart}
          removeCart={removeCart}
          setCartValueTotal={setCartValueTotal}
          cartValueTotal={cartValueTotal}
          removeAllCart={removeAllCart}
        />
      </main>
    </div>
  );
}

export default App;
