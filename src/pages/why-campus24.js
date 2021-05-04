import React from 'react'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

import C24_Home_and_Global from '../components/static/img/C24_Home&Global.svg'
import C24_Campus_Star from '../components/static/img/C24_Campus_Star.svg'
import C24_Communities from '../components/static/img/C24_Communities.svg'
import C24_Invisibility_Cloak from '../components/static/img/C24_Invisibility_Cloak.svg'
import C24_utility from '../components/static/img/utility.svg'
import C24_virtual_campus from '../components/static/img/virtual_campus.svg'

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
                        Ever felt lost in the sea of content at Facebook/Instagram or
                        any other social media? With thousands of 'friends' whom you
                        never feel connected to, accepting requests from strangers,
                        tired of scrolling through their posts and pictures who do not
                        have any real connection to you? While you miss out on
                        information and posts which are actually relevant to you.
                    <br />
                        <br />
Wouldn’t it be better if you could ONLY glance at posts of your
friends in your college? Like…… Who bagged that job? What's the
latest news from the campus clubs? etc.
                    <br />
                        <br />
Here comes Campus24 to your rescue <span role="img" aria-label="tick">✅</span>
                        <strong> We unite your Family - Your Campus</strong>
                        <br />
                        <br />
We have the advantages of both a social and a utility app (all
in one). No other social app, NO other, combines all the fun and
productive aspects of your college life as seamlessly and as
effectively as we do! Just give it a try and you will see <span role="img" aria-label="happy">😃</span>
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
                                <img src={C24_Home_and_Global} style={{ width: "100%" }} alt="C24_Home_and_Global" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Home&amp;Global</strong>
                                <br />
                                <p>
                                    Our ‘Home’ is a platform with all of your college
                                    mates already present and ‘Global’ connects all C24
                                    campuses socially. So, discuss, interact, share,
                                    comment and get to know what’s trending!
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
                                <img src={C24_Communities} style={{ width: "100%" }} alt="C24_Communities" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Communities</strong>
                                <br />
                                <p>
                                    Like-minded peeps Assemble!! From PUBG groups to
                                    GATE coaching, find people with whom you can connect
                                    naturally to have fun and/or amplify your skills!
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
                                <img src={C24_Campus_Star} style={{ width: "100%" }} alt="C24_Campus_Star" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Campus_Star</strong>
                                <br />
                                <p>
                                    College is the time to discover yourself. Showcase
                                    your talents, your achievements, team up with
                                    friends and let your skills sparkle through our
                                    weekly contests! Let the entire campus know you!
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
                                <img src={C24_Invisibility_Cloak} style={{ width: "100%" }} alt="C24_Invisibility_Cloak" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Invisibility_Cloak</strong>
                                <br />
                                <p>
                                    To cater to the need of expressing your confessions
                                    anonymously <span role="img" aria-label="wink">😉</span>. We provide an inbuilt tool like no
                                    other social media! You may not want to give out
                                    your identity sometimes and we respect that :D
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
                                <img src={C24_utility} style={{ width: "100%" }} alt="C24_utility" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Utility_Power</strong>
                                <br />
                                <p>
                                    Notes, Notices, Event schedules, Clubs Workshops —
                                    at your fingertips. If you haven’t yet downloaded
                                    the app, you are missing out! Cuz C24 campuses will
                                    always be a step ahead.
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
                                <img src={C24_virtual_campus} style={{ width: "100%" }} alt="C24_virtual_campus" />
                            </div>
                            <div className="col-10" style={{
                                height: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <strong>#C24_Virtual_Campus</strong>
                                <br />
                                <p>
                                    Get to experience a virtual campus life like never
                                    before! C24 will keep you entertained and amplify
                                    your college days. Enjoy Contests, Facts, Memes,
                                    Advice, Tips etc. while managing your studies!
                                    <br /><br />
                                    <strong> ONLY POSSIBLE ON CAMPUS24 <span role="img" aria-label="tick">✅</span></strong>
                                </p>
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
            </Layout>
        </>
    )
}

export default whyCampus24