import '../styles/Cart.css'
import { useState } from 'react'

export default function Cart() {
    const [cart, updateCart] = useState(0)
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)

    const clearCart = () => {
        updateCart(0)
    }

    return isOpen ? (
    <div className='jh-cart'>
        <button
            className='jh-cart-toggle-button'
            onClick={() => setIsOpen(false)}
        >
            Close    
        </button>
        <h2>Cart</h2>
        <div>
            Montsera: R{monsteraPrice}
            <button onClick={() => updateCart(cart + 1)}>
                Add
            </button>
        </div>
        <h3>Total: R{monsteraPrice * cart}</h3>
        <button
            onClick={clearCart} className='jh-clear-cart-button'
        >
            Clear Cart
        </button>
    </div>) : (
        <button
            className='jh-cart-toggle-button'
            onClick={() => setIsOpen(true)}>
            Open Cart
        </button>
    )
}