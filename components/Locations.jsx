import React from 'react'
import styles from '@/styles/Home.module.css'

const Locations = () => {
    return (
        <div className='locations_container' id='locations'>
            <div className='locations_text-container'>
                <h2>THE LOCATIONS WE SERVICE</h2>
                <ul>
                    <li>Berwick</li>
                    <li>Cranbourne</li>
                    <li>Lyndhurst</li>
                    <li>Dandenong</li>
                    <li>Carrum Downs</li>
                    <li>Skye</li>
                    <li>Bayside</li>

                </ul>
            </div>
            <img src='/static/map2.JPG'></img>
        </div>
    )
}

export default Locations