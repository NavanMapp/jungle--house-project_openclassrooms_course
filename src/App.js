import { useState, useEffect } from 'react';
import Banner from './components/Banner.js';
import Cart from './components/Cart';
import Footer from './components/Footer.js';
import ShoppingList from './components/ShoppingList';
// import './styles/Layout.css'

export default function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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