import React from 'react'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

function Contact() {
    return (
        <>
            <SEO title="Contact Us" />
            <Layout>
                <SectionTop title="CONTACT US" />
                <section>
                    <div className="container text">
                        <div className="col-12">
                            <h4 id="contactus-msg"> </h4>
                        </div>
                        <form id="contactus" action="https://formspree.io/xqkbjkjo" method="POST">
                            <div className="row">
                                <div className="col">
                                    Name:
                                <input type="text" required="" name="Name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col">
                                    Email:
                                <input type="text" name="Email" className="form-control" placeholder="Your Email" required="" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Subject:</label>
                                <input type="text" name="Subject" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Message:</label>
                                <textarea className="form-control" required="" name="Message" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" id="contactus-button" className="nav-app py-2" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </section>


                {/* <section className="pt-3 pb-3" style={{ backgroundColor: "#151d32" }}>
                    <div className="container">
                        <div className="row part-above-footer">
                            <Link to="/careers" className="work-with-us">
                                <button className="nav-app">Work with us</button>
                            </Link>
                            <p className="pt-2 text-above-footer" style={{
                                color: "white",
                                display: "inline-block",
                                height: "100%",
                                verticalAlign: "middle",
                                marginBottom: "0"
                            }}>
                                Be a part of the revolution to change the campus
                                experience forever. Grow and test your skills working at
                                Campus24!
                            </p>
                        </div>
                    </div>
                </section> */}
=======
               
>>>>>>> 3976060bb1d0bb4b27e013077e5fac714045c33f
            </Layout>
        </>
    )
}

export default Contact