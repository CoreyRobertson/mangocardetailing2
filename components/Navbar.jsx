import React from 'react'
import styles from '@/styles/Home.module.css'
import { RiMenu5Fill } from 'react-icons/ri'
import { useState, useEffect } from "react";

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);


        };
    }, []);



    return (

        <nav className="navbar">
            <a href="/" className="brand-name">
                MANGO CAR DETAILING
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <RiMenu5Fill className='hamburger_icon' />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="#home" className='link_home' onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>About Us</a>
                    </li>
                    <li>
                        <a href="#packages" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Our Packages</a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Our Services</a>
                    </li>
                    <li>
                        <a href="#locations" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Our Locations</a>
                    </li>
                    <li>
                        <a href="#gallery" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Gallery</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Contact</a>
                    </li>
                    <button type='button' className='btn'>Get a Quote!</button>
                </ul>
            </div>
        </nav>
    );
}

