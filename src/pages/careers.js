import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

function Careers() {
    return (
        <>
            <SEO title="Careers" />
            <Layout>
                <SectionTop title="Careers" />
                <div style={{
                    width: "100vw",
                    height: "2100px",
                    display: "flex",
                    justifyContent: "center",
                    overflowY: "scroll"
                }}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe4FzW4_eF6UBv9__Vg7QcL02APduTLD13bVuMXKbXsaNaaMg/viewform?embedded=true"
                        width="640"
                        title="Careers Form"
                        className="form"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0" style={{ overflowY: "scroll" }}>Loading…</iframe>
                    <div className="pt-5 pb-5"></div>
                </div>
            </Layout>
        </>
    )
}

export default Careers