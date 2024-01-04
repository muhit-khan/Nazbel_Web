import React from 'react'
import "./Homepage.css"
import Banner from './body/Banner/Banner'
import Services from './body/Services/Services'
import About from './body/About/About'

const Homepage = () => {
    return (
        <>
            <Banner />
            <Services />
            <About />
        </>
    )
}

export default Homepage