import React from 'react'
import styles from '@/styles/Home.module.css'
const Packages = () => {
    return (
        <div className='packages_container' id='packages'>
            <div className='packages_container-card_container'>
                <div className='card'>
                    <h1>SILVER</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
                <div className='card_main'>
                    <div className='card_main-popular'>
                        <h2>Most Popular!</h2>
                    </div>
                    <h1>GOLD</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
                <div className='card'>
                    <h1>PLATINUM</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Packages