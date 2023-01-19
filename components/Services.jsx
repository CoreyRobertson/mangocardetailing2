import React from 'react'
import styles from '@/styles/Home.module.css'
import { AiOutlineCar } from 'react-icons/ai'
import { GiCarSeat } from 'react-icons/gi'
import { FaRegHandshake } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='services_container' id='services'>

            <div className='services_card-container'>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>MOBILE CAR DETAILING</h1>
                        <AiOutlineCar className='services_icon' />
                    </div>
                    <p>Are you tired of spending your weekends at the car wash? Let our mobile detailing service do the work for you! We use only the best products to give your car a showroom-like shine, right in your driveway. With our convenient mobile service, you can save time and money while ensuring the highest quality care for your vehicle. Get a professional cleaning experience with our mobile car detailing service today!</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>INTERIOR CLEANING</h1>
                        <GiCarSeat className='services_icon' />
                    </div>
                    <p>Get your car's cabin looking showroom-new with interior cleaning. With our comprehensive packages, you can experience a full interior cleaning, polishing and protection for your vehicle. We will bring back the sparkle to your car's interior and help protect it from future wear and tear. Enjoy a clean, hygienic and fresh-smelling car interior with our interior cleaning services!</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>PRE-SALE DETAILING</h1>
                        <FaRegHandshake className='services_icon' />
                    </div>
                    <p>Get the most out of your car sale with Pre-Sale Detailing! Our professional cleaning service will make sure your car looks its best when you put it up for sale. We'll provide a thorough and comprehensive detailing of the exterior and interior of your vehicle, helping to secure the highest possible price. With Pre-sale Detailing, you can have peace of mind knowing your car will look its best when buyers come to take a look.</p>
                    <button type='button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services