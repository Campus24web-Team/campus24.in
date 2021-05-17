import React from 'react'
import { Link } from "gatsby"

import '../static/style/Layout/footer.css'

import FooterPic from '../static/img/footerpic.png'
import Play from '../static/img/play.png'

function Footer() {
    return (
        
        <>
        
                <section className="pt-3 pb-3" style={{ backgroundColor: "#151d32" }}>
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
                </section>
            <footer className="pb-4 pt-2" style={{ minHeight: '19rem', maxWidth: '100vw', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row footer-2-part-flex">
                        <div className="row footer-2-part mt-4">
                            <div className="col-6 footer-list-container">
                                <div className="container">
                                    <Link to="/">
                                        <div class="footer-image">
                                            <img src={FooterPic} className="footer-campus-logo" alt="Campus 24" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 product-container">
                                <h3 style={{ color: '#0CFFA5', fontFamily: '"lato"', fontSize: '20px', fontWeight: 900 }}>PRODUCTS</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'block' }}><Link to="/why-campus24">Why Campus24?</Link></li>
                                    <li style={{ display: 'block' }}><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">Demo</a></li>
                                    <li style={{ display: 'block' }}><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row footer-2-part mt-4">
                            <div className="col-6 footer-list-container" style={{ paddingLeft: '40px' }}>
                                <h3 style={{ color: '#0CFFA5', fontFamily: '"lato"', fontSize: '20px', fontWeight: 900 }}>RESOURCES</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'block' }}><Link to="/faq">FAQs</Link></li>
                                    <li style={{ display: 'block' }}><a href="https://blog.campus24.in/">Blogs</a></li>
                                    <li style={{ display: 'block' }}><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">Podcast</a></li>
                                </ul>
                            </div>
                            <div className="col-6 footer-list-container">
                                <h3 style={{ color: '#0CFFA5', fontFamily: '"lato"', fontSize: '20px', fontWeight: 900 }}>COMPANY</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'block' }}><Link to="/about-us">About</Link></li>
                                    <li style={{ display: 'block' }}><Link to="/careers">Careers</Link></li>
                                    <li style={{ display: 'block' }}><Link to="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row footer-2-part mt-4">
                            <div className="col-6 footer-list-container">
                                <h3 style={{ color: '#0CFFA5', fontFamily: '"lato"', fontSize: '20px', fontWeight: 900 }}>LEGAL</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'block' }}><Link to="/terms">Terms &amp; Conditions</Link></li>
                                    <li style={{ display: 'block' }}><Link to="/privacy">Privacy</Link></li>
                                    <li style={{ display: 'block' }}><Link to="/cookies">Cookie</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 footer-list-container">
                                <h3 style={{ color: '#0CFFA5', fontFamily: '"lato"', fontSize: '20px', fontWeight: 900 }}>SOCIAL</h3>
                                <div className="row" style={{ position: 'relative', left: '12px' }}>
                                    <div style={{ marginLeft: '4px' }}>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            <li style={{ display: 'block' }}><a href="https://www.facebook.com/campus24app">Facebook</a></li>
                                            <li style={{ display: 'block' }}><a href="https://www.instagram.com/campus24app/">Instagram</a></li>
                                            <li style={{ display: 'block' }}><a href="https://twitter.com/C24_app">Twitter</a></li>
                                        </ul>
                                    </div>
                                    <div className="ml-2">
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            <li style={{ display: 'block' }}><a href="https://www.linkedin.com/company/campus24">LinkedIn</a></li>
                                            <li style={{ display: 'block' }}><a href="https://www.quora.com/profile/Campus24-1">Quora</a></li>
                                            <li style={{ display: 'block' }}><a href="mailto:contact@campus24.in">Email</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            <p className="links my-auto">
                                <a href="https://play.google.com/store/apps/details?id=com.bytera.campus24" target="_blank" className="footer-app">Get the app</a>
                                <a href="https://play.google.com/store/apps/details?id=com.bytera.campus24" target="_blank" style={{ maxWidth: 'max-content', width: 'max-content' }} align="right">
                                    <img src={Play} className="play play-2" alt="Google Play" />
                                </a>
                            </p>
                            <div className="row" align="center">
                                <form className="form-email-2" method="POST" action="https://us-central1-campus24-e0a13.cloudfunctions.net/SendAppLink">
                                    <div className="col-6">
                                        <input type="email" name="email" placeholder="EMAIL-ID" required />
                                    </div>
                                    <div className="col-6" style={{ position: 'relative', top: '15px' }}>
                                        <input type="submit" value="GET DOWNLOAD LINK" data-target="#EmailSentModalCenter" />
                                        <p style={{ fontFamily: '"lato"', fontSize: '15px', fontWeight: 400, paddingTop: '8px', paddingLeft: 0, color: '#0CFFA5' }} align="center">*Available only on Android</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div
                className="row"
                style={{
                    maxWidth: "100vw",
                    backgroundColor: "rgb(12, 17, 29)",
                    margin: 0,
                }}
            >
                <div
                    className="container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <div className="links" style={{ height: "32px", paddingTop: "4px" }}>
                        <p
                            href="#"
                            className="footer-app"
                            style={{
                                color: "rgb(58, 83, 143)",
                                transform: "scale(1)",
                                fontSize: "smaller",
                                marginBottom: "4px",
                            }}
                        >
                            Copyright © {new Date().getFullYear()}, Bytera Ltd. | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="EmailSentModalCenter"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">
                                Mail Sent
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body" align="center">
                            <img
                                src="https://campus24.in/static/images/Email-Sent.png"
                                style={{ width: "150px" }}
                                alt="Email Sent"
                            />
                            <br />
                            <br />
                            <h4>Check Your Email</h4>
                            <br />
                            <p>We have sent the link to you. Get the app now.</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Footer