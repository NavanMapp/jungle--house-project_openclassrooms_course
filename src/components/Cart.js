import '../styles/Cart.css'
import { useState } from 'react'

export default function Cart() {
    const [cart, updateCart] = useState(0)
    const monsteraPrice = 8

    return (
    <div className='jh-cart'>
        <h2>Cart</h2>
        <div>
            Montsera: {monsteraPrice}€
            <button onClick={() => updateCart(cart + 1)}>
                Add
            </button>
        </div>
        <h3>Total: {monsteraPrice * cart}€</h3>
    </div>)
}