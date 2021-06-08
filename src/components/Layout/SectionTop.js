import React from 'react'

import '../static/style/Layout/sectionTop.css'

import Wave from '../static/img/wave.png'

function SectionTop(props) {
    const { title } = props

    return (
        <>
            <section className="sec-top" >
                <h1>
                    {title}
                </h1>
            </section>
            <section>
                <div className="wave wave1" style={{ backgroundImage: `url(${Wave})` }}></div>
                <div className="wave wave2" style={{ backgroundImage: `url(${Wave})` }}></div>
                <div className="wave wave3" style={{ backgroundImage: `url(${Wave})` }}></div>
            </section>
        </>
    )
}

export default SectionTop