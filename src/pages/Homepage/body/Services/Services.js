import React from 'react'
import "./Services.css"
import { ServicesData } from "./ServicesData"
import cardImage from './images/card.webp';
import MultiActionAreaCard from '../../../../components/materialui/MultiActionAreaCard'

const Services = () => {
    return (
        <section className='services'>
            <div className='services-text-container'>
                <h3 className='services-title'> Services </h3>
                <p className='services-description'>The services we provide...</p>
            </div>
            <div className='services-card-container'>
                {ServicesData.map(service => (
                    <MultiActionAreaCard
                        key={service.id}
                        imagePath={cardImage}
                        title={service.title}
                        description={service.description}
                        buttonLink={service.link}
                        buttonText="Explore"
                    />
                ))}
            </div>
        </section >
    )
}

export default Services