import { useState, useEffect } from 'react'
import Banner from '../src/components/Banner'
import logo from './assets/logo.png'
import Cart from '../src/components/Cart'
import Footer from '../src/components/Footer'
import ShoppingList from '../src/components/ShoppingList'
import './styles/Layout.css'

export default function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt='Jungle House' className='jh-logo' />
        <h1 className='jh-title'>Jungle House</h1>
      </Banner>
      <div className='jh-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}