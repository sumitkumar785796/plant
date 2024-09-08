import React from 'react'
import Slider from './Slider'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'

import NewLetter from './NewLetter'
import Contact from './Contact'
import Product from './Product'
const Header = () => {
    return (
        <>
            <Slider />
            <Services />
            <Product/>
            <About />
            <Portfolio />
            <NewLetter />
            <Contact />
        </>
    )
}

export default Header
