import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!inputValue.includes('@')) {
            alert(e.target['Error: no @ has been entered. This is not a valid email address.'].value)
        }
    }

    return(
        <Footer className='jh-footer'>
            <div className='jh-footer-elem'>
                For plant enthusiasts 🌿🌱🌵
            </div>
            <div className='jh-footer-elem'>Subscribe to our newsletter : </div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' defaultValue='Enter Your Email Address Here' />
                <button type='submit'>Enter</button>
            </form>
        </Footer>
    )
}