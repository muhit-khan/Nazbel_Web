import React from 'react'

const CommonServices = ({ data }) => {
    return (
        <div className="service_container">
            {
                data.map((item) => {
                    const { id, name } = item;

                    return <div key={id} className="service_item">
                        <h2>{name}</h2>
                    </div>
                })
            }
        </div>
    )
}

export default CommonServices

