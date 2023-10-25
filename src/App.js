import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartProvider } from "./store/cart-context";
function App() {
  return (
    <div className="App">
      <CartProvider>
        {/* {open.cartOpen ? <div className="overlay"></div> : ""} */}
        <Header />
        <Meals />
      </CartProvider>
    </div>
  );
}

export default App;
