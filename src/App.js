import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
  <div>
      <Banner />
      <Cart />
      <ShoppingList />
  </div>
  )
}

export default App;
