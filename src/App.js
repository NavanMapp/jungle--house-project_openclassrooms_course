import { useState } from 'react';
import Banner from './components/Banner.js';
import Cart from './components/Cart';
import Footer from './components/Footer.js';
import ShoppingList from './components/ShoppingList';
// import './styles/Layout.css'

export default function App() {
  const [cart, updateCart] = useState([])

  return (
  <div>
      <Banner />
      <div className='jh-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
  </div>
  )
}