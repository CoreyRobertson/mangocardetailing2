import React from 'react'
import { AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import styles from '@/styles/Home.module.css'
const Contact2 = () => {
    return (
        <div className=' contact2-container' id='contact'>
            <div className='heading'>
                <h1>Mango Car Detailing</h1>
            </div>
            <div className=' contact2'>
                <div className=' contact2-links'>
                    <a href='#about'>About Us</a>
                    <a href='#services'>Our Services</a>
                    <a href='#gallery'>Gallery</a>
                    <a>Legal</a>
                </div>
                <div className=' contact2-contact'>
                    <ul>
                        <li className='name'>Michael</li>
                        <li className='phone_i'><AiOutlinePhone className='phone_i' />04** *** ***</li>
                    </ul>
                </div>
                <div className=' contact2-media'>
                    <a><AiOutlineFacebook className='icon_media' /></a>
                    <a><AiOutlineInstagram className='icon_media' /></a>

                </div>
            </div>
        </div>
    )
}

export default Contact2