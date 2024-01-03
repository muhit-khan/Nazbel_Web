import React from 'react'
import "./Services.css"
import { servicesData } from "./data"
import CommonServices from '../../../../components/CommonServices/CommonServices'

const Services = () => {
    return (
        <section className='home_service'>
            <CommonServices data={servicesData} />
            <button>More...</button>
        </section>
    )
}

export default Services