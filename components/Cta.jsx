import React from 'react'
import styles from '@/styles/Home.module.css'
import { AiOutlinePhone } from 'react-icons/ai'

const Cta = () => {
    return (
        <div className='cta_container'>
            <div className='cta_text-container'>
                <h2>CALL US TODAY</h2>
                <h2 ><AiOutlinePhone className='phone' />04** *** ***</h2>
            </div>
            <button>Book now!</button>
        </div>
    )
}

export default Cta