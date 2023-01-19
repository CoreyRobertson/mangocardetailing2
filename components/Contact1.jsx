import React from 'react'
import styles from '@/styles/Home.module.css'

const Contact1 = () => {
    return (
        <div className='contact1_container'>
            <div className='contact1_text-container'>
                <h2>FOR A HASSLE FREE QUOTE</h2>
                <p>Tell us about yourself and your vehicle, and we will get back to you with a competitive price </p>
            </div>
            <div className='contact1_form-container'>
                <form action="https://formsubmit.co/coreystephenr@gmail.com" method="POST">
                    <input className='text' type="text" name='Name' placeholder='Your Name' required></input>
                    <input className='text' type="text" name='Phone Number' placeholder='Your Phone Number'></input>
                    <input className='text' type="text" name='Location' placeholder='Your Location'></input>
                    <input className='text' type="email" name="email" placeholder="Email Address" required></input>
                    <input className='project' type="text" name='Your Vehicle' placeholder='Your Vehicle' required></input>
                    <input className='project' type="text" name='Desired Services' placeholder='Desired Services' required></input>
                    <input className='button1' type="submit"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
            </div>
        </div>
    )
}

export default Contact1