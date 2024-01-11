import '../styles/Cart.css'
import { useState } from 'react'

export default function Cart() {
    const [cart, updateCart] = useState(0)
    // const total = cart.reduce(
    //     (acc, plantType) => acc + plantType.quantity * plantType.price,
    //     0
    // )
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
            {cart.map(( name, price, quantity ), index) => (
                <div key={`${name}-${index}`}>
                    {name} R{price} x {quantity}
                </div>
            )}
        </div>
        <h3>Total: R{total}</h3>
        <button
            onClick={() => updateCart([])}>Empty Cart</button>
    </div>) : (
        <button
            className='jh-cart-toggle-button'
            onClick={() => setIsOpen(true)}>
            Open Cart
        </button>
    )
}