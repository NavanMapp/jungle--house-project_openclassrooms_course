import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = (e) => {
        e.preventDefault()
        if (!inputValue.includes('@')) {
            alert(e.target['Error: no @ has been entered. This is not a valid email address.'].value)
        }
    }

    return(
        <footer className='jh-footer'>
            <div className='jh-footer-elem'>
                For plant enthusiasts 🌿🌱🌵
            </div>
            <div className='jh-footer-elem'>Subscribe to our newsletter : </div>
            <form onSubmit={handleBlur}>
                <input 
                    placeholder='Enter Your Email Address' 
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}  
                />
                <button type='submit'>Enter</button>
            </form>
        </footer>
    )
}