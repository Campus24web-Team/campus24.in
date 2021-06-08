import React from 'react'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

import C24_ANONYMUS_POSTING from '../components/static/img/Anonymous Posting.png'


import C24_utility from '../components/static/img/utility.svg'

import C24_COLLEGES_UNITED from '../components/static/img/Colleges-United.png'
import C24_CHIT_CHAT from '../components/static/img/Chit - Chat.png';
import C24_CAMPS from '../components/static/img/College-camps.png';
import C24_ENGAGING_COMMUNITIES from '../components/static/img/Engaging Communities.png'
import C24_OWN_IT from '../components/static/img/Own-It.png'
import C24_STAR  from '../components/static/img/C24-Awards.png'
import C24_VIRTUAL_CAMPUS  from '../components/static/img/The Virtual Campus.png'
import '../components/static/style/Pages/why-us.css'

import '../components/static/style/Pages/why-us.css'

function whyCampus24() {
    return (
        <>
            <SEO title="Why Campus 24" />
            <Layout>
                <SectionTop title="WHY C24" />
                <div className="container" style={{
                    position: "relative",
                    top: "-64px",
                    overflowX: "hidden",
                    overflowY: "visible"
                }}>
                    <div style={{
                        backgroundColor: "#151d32",
                        color: "white",
                        padding: "18px",
                        marginBottom: "32px"
                    }}>
                        Why Us?
                </div>
                    <p className="mb-5 pb-2">
                    Ever felt lost in the sea of content at Facebook/Instagram or any other social media? 
                    With thousands of 'friends' whom you never feel connected to, accepting requests from strangers, 
                    tired of scrolling through their posts and pictures who do not have any real connection to you? While 
                    you miss out on information and posts which are actually relevant to you!
                    <br />
                        <br />
                        Wouldn’t it be better if you could ONLY glance at posts of communities of your interests? Be it 
                        any kind of quirk or interest, wouldn’t it be great to have communities of EVERY kind in a single platform?

                    <br />
                        <br />
                    Here comes Campus24 to your rescue <span role="img" aria-label="tick">✅</span>
                        <strong>We connect like-minded individuals!</strong>
                        <br />
                        <br />
                        We have the advantages of both a social and a utility app (all in one). No other social app, NO other, combines all the fun and 
                        productive aspects of your college life as seamlessly and as
                        effectively as we do! Just give it a try and you will see. <span role="img" aria-label="happy">😃</span>
                    </p>
                    <div style={{
                        backgroundColor: "#151d32",
                        color: "white",
                        padding: "18px",
                        marginBottom: "32px"
                    }}>
                        Here’s what we do which others don’t
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_COLLEGES_UNITED} style={{ width: "100%" }} alt="C24_Home_and_Global" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>Colleges-United</strong>
                                <br />
                                <p>
                                    Be a part of C24 Family! - the Largest College student network of India
                                </p>
                            </div>
                             <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_CHIT_CHAT} style={{ width: "100%" }} alt="C24_Home_and_Global" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>Chit-Chat</strong>
                                <br />
                                <p>
                                    Chat with anyone from any college across India!
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_ANONYMUS_POSTING} style={{ width: "100%" }} alt="C24_Invisibility_Cloak" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>Anonymous Posting</strong>
                                <br />
                                <p>
                                   Express freely! <br />
Protect your identity
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_CAMPS} style={{ width: "100%" }} alt="C24_Communities" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>C24-Camps!</strong>
                                <br />
                                <p>
                                   Student run communities for students! <br />
Connect and Interact with like-minded peeps
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_ENGAGING_COMMUNITIES} style={{ width: "100%" }} alt="C24_Communities" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>Engaging Communities</strong>
                                <br />
                                <p>
                                   Be it Interest groups or Internships & News <br />
Find Camps for Anything & Everything!
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_OWN_IT} style={{ width: "100%" }} alt="C24_utility" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>Own It!!</strong>
                                <br />
                                <p>
                                   Create your own Camp <br />
Fully customisable <br />
Build your own audience base!
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_STAR} style={{ width: "100%" }} alt="C24_Campus_Star" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>C24 Awards</strong>
                                <br />
                                <p>
                                    Be an influencer among the youth!! <br />
Post and get rewarded for contributing
                                </p>
                            </div>
                        </div>
                    
                        <br />
                        
                        <div className="row">
                            <div className="col-2 imgs-why-us" style={{
                                verticalAlign: "middle",
                                display: "inline-block",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}>
                                <img src={C24_VIRTUAL_CAMPUS} style={{ width: "100%" }} alt="C24_virtual_campus" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>The Virtual Campus</strong>
                                <br />
                                <p>
                                    One app to keep you updated, connected and united with India's college youth!
                                    <br /><br />
                                    <strong> ONLY POSSIBLE ON CAMPUS24 <span role="img" aria-label="tick">✅</span></strong>
                                </p>
                                <strong>#C24_COLLEGES</strong>
                                    <br />

                                
                            </div>
                        </div>
                        <br />
                    </div>
                </div>




                <section style={{
                    backgroundColor: "#efefef",
                    position: "relative",
                    bottom: "-16px"
                }}>
                    <div className="container" align="center" style={{ position: "relative", bottom: "-16px" }}>
                        <strong>
                            <h2 style={{
                                color: "#0cffa5",
                                fontSize: "80px",
                                position: "relative",
                                bottom: "-16px",
                            }} align="left">
                                “
                            </h2>
                            <p>
                                Stay Updated, Organised and Connected to your Campus at
                                all times (even after you pass out).
                            </p>
                            <br />
                            <p>
                                Lost in the sea of contents in Fb/Instagram etc. by
                                'friends' you don't even know?
                            </p>
                            <br />
                            <p>
                                Campus 24 - A tailor made social-utility app ONLY for
                                your campus life has come to your rescue!
                            </p>
                            <br />
                            <h2 style={{
                                color: "#0cffa5",
                                fontSize: "80px",
                                position: "relative",
                                top: "-16px",
                            }} align="right">
                                ”
                            </h2>
                        </strong>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default whyCampus24