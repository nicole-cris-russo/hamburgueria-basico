import "./App.css";
import Global from "./components/styles/global.js";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { ProductProvider } from "./contexts/productContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Global />
        <Header />
        <main>
          <ProductsList />
          <Cart />
        </main>
      </ProductProvider>
    </div>
  );
}

export default App;
