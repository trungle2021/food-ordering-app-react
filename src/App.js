
import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import {CartProvider} from './context/CartContext';
function App() {

  return (
    <div className='App'>
      <CartProvider>
        <Header/>
        <Meals/>
      </CartProvider>

    </div>
  );
}

export default App;
