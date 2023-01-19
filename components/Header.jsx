import React from 'react'
import styles from '@/styles/Home.module.css'

const Header = () => {
    return (
        <div className='header_container' id='home'>
            <div className='header_text-container'>
                <h1>MELBOURNE'S BEST CAR DETAILING SERVICES</h1>
                <button type='button' className='header_button'>Get A Free Quote!</button>
            </div>
            <div className='header_image-container'>
                <img src='/static/carorange2.png' className='carImage' alt='car'></img>
            </div>
        </div>
    )
}

export default Header