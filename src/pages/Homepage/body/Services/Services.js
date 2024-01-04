import React from 'react'
import "./Services.css"
import { ServicesData } from "./ServicesData"
import cardImage from './images/card.webp';
import MultiActionAreaCard from '../../../../components/materialui/MultiActionAreaCard'

const Services = () => {
    return (
        <section className=''>
            <h3 className='tilte'> Services </h3>
            <div className='card-container'>
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