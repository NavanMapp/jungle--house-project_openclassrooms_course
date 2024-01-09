import './App.css';
import Banner from './components/Banner.js';
import Cart from './components/Cart';
import Footer from './components/Footer.js';
import ShoppingList from './components/ShoppingList';

export default function App() {
  function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
  }
  return (
  <div>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
      {/* <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='Type your text' />
        <button type='submit'>Enter</button>
      </form> */}
  </div>
  )
}