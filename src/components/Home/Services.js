import React from 'react'
import Title from '../Globals/Title'
import services from '../../constants/services'

import '../../scss/services.scss'

const Services = () => {
    return (
        <section className="services spacing">
            <div className="container">
                <Title title="Our Services" />
                <div className="row">
                    {
                        services.map((item, index) => {
                            return (
                                <div className="col-12 col-md-4 mt-5" key={index}>
                                    <div className="services-box">
                                        <div>{item.icon}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
