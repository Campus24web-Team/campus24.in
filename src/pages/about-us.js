import React, { useEffect } from 'react'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

import CULT from '../components/static/img/CULT.jpg'
import AD from '../components/static/img/Team/AD.jpg'
import DB from '../components/static/img/Team/DB.jpg'
import RC from '../components/static/img/Team/RC.jpg'
import SB from '../components/static/img/Team/SB.jpg'
import SG from '../components/static/img/Team/SG.jpg'
import SM from '../components/static/img/Team/SM.jpg'
import VKR from '../components/static/img/Team/VKR.jpg'
import mail from '../components/static/img/Mail.svg'

import '../components/static/style/Pages/about-us.css'

function About() {
    useEffect(() => {
        setTimeout(() => {
            const accordianList = window.document.getElementsByClassName("accordion")

            for (let i = 0; i < accordianList.length; i++) {
                accordianList[i].addEventListener("click", function () {
                    this.classList.toggle("active")
                    const panel = this.nextElementSibling
                    if (panel.style.display === "block") { panel.style.display = "none" }
                    else { panel.style.display = "block" }
                })
            }
        }, 100)
    }, [])

    return (
        <>
            <SEO title="About Us" />
            <Layout>
                <SectionTop title="ABOUT US" />
                <h1 align="center" style={{ position: "relative", top: "-128px", transform: "scale(0.7)" }}>
                    Our Work Culture
                </h1>
                <div align="center" className="container" style={{
                    position: "relative",
                    top: "-64px",
                    overflowX: "hidden",
                    overflowY: "visible"
                }}>
                    <button type="button" data-toggle="modal" data-target="#ModalCULT" style={{ border: "none", padding: "0", outline: "none" }}>
                        <img src={CULT} className="cult" alt="CULT" />
                    </button>
                    <div className="modal fade" id="ModalCULT" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">
                                        CULT
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body" align="left">
                                    <strong> COLLABORATE</strong>
                                    <p>
                                        A team is a family. We focus on building
                                        relationships to make us more efficient and
                                        stronger.
                                    </p>
                                    <strong> UPSCALE</strong>
                                    <p>
                                        Our app is available 24*7 and so are we. Young,
                                        talented minds ready to hustle day and night to
                                        grow our company, our dream.
                                    </p>
                                    <strong> LEADERSHIP</strong>
                                    <p>
                                        The best comes out through the work one loves.
                                        Inspire and nurture to become the best version.
                                    </p>
                                    <strong> TRANSPARENCY</strong>
                                    <p>
                                        Connect to everyone because there’s something to
                                        learn from each. Express, Ideate and Communicate
                                        freely.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="pt-5 pb-5" style={{ backgroundColor: "#151d32", color: "white" }}>
                    <div className="container">
                        <h2 style={{ color: "#0cffa5" }}>MISSION</h2>
                        <p>
                            Our mission is to create the Virtual Campus which would
                            enable our users to enjoy a perfect campus life by striking
                            a balance between fun and productivity.
                        <br />
                        Our platform will not only unify the various departments in
                        a campus, but entire student communities in a region. We
                        will bring a sense of belongingness among students of all
                        campuses.
                        <br />
                        Campus24 will revolutionize the interconnections between
                        college departments fueling collaboration, entrepreneurial
                        spirit, talent development, learning experience and team
                        spirit.
                        <br />
                        It was surveyed that about 60% professionals get a job
                        through recommendations via seniors and batchmates. Our
                        unique idea of bringing alumni and batches together would
                        exponentially increase one’s network and help them remain
                        connected to their alma mater forever.
                        </p>
                        <h2 className="mt-5" style={{ color: "#0cffa5" }}>VISION</h2>
                        <p>
                            Our Vision is to create a self-sustaining unicorn within the
                            next 10 years and be the pioneer in the market of community
                            focused social utility platforms.
                        <br />
                        Not only college/uni, our aim is to unite all the schools as
                        well as college/uni campuses in India within these 10 years
                        and become the all in one platform every student in India
                        will need and appreciate.
                        </p>
                    </div>
                </section>
                <section className="mt-5 pt-2">
                    <div className="container">
                        <div style={{
                            backgroundColor: "#151d32",
                            color: "white",
                            padding: "18px",
                            marginBottom: "32px"
                        }}>
                            What Do We Do?
                        </div>
                    </div>
                    <div className="container text" style={{ position: "relative", top: "0" }}>
                        <p>
                            Campus24 is an application designed to simplify the
                            unorganized life of a college student by providing a
                            platform
                        </p>
                        <ul>
                            <li>
                                to have fun in a private social networking domain ONLY
                                for the students of that campus (no outsiders!).
                            </li>
                            <li>
                                to easily store NOTES / QUESTIONS BANKS / PLACEMENT
                                REPORTS etc. for each and every department of the
                                campus.
                            </li>
                            <li>
                                to get important NOTICES with their respective
                                deadlines.
                            </li>
                            <li>
                                to remain updated with CLUB EVENTS / FESTS / WORKSHOPS
                                happening all over the campus.
                            </li>
                            <li>
                                to COMMUNICATE with anyone and everyone from their
                                college, not only currently studying students but also
                                pass-outs (Alumni - networking).
                            </li>
                            <li>
                                to discover oneself and other like-minded people in
                                one's campus through the COMMUNITY groups. Be it gaming,
                                sports, exam prep, coding, entrepreneurship, etc., find
                                your own community at Campus24!
                            </li>
                        </ul>
                        <p>
                            Campus24 supports networking and communication, thus the
                            'GLOBAL FEED' is provided where all colleges are present to
                            increase networking, share tips, advice, experiences and
                            update students about competitions, internship
                            opportunities, placement news, online courses and a lot
                            more!! Make friends across different colleges, expand your
                            reach and collaborate!
                        </p>
                        <p>
                            Be it anonymous confessions, talent showcasing pictures or
                            videos, study discussions, opinions and views or simply
                            memes about your campus and friends; express yourself freely
                            and have fun in this EXCLUSIVE College social platform!
                            Participate in weekly contests and get a chance to be
                            featured as the Campus Star! <span role="img" aria-label="star">🌟</span>.
                        </p>
                        <p>
                            It is a perfect blend of utility and social application.
                            Never again miss any deadlines, No more begging to friends
                            and seniors for laboratory reports / class notes / previous
                            years questions. Once uploaded, each department gets its own
                            private access to Notes of each and every semester for the
                            entire course!!
                        </p>
                        <p>
                            Campus24 allows you to remain connected to your alma mater
                            even after passing out so that you do not miss your campus
                            events and popular news, also helping the juniors to easily
                            access their alumni database.
                        </p>
                        <p>
                            A single application to remain Updated, Organized and
                            Connected to your Campus!
                             <br />
                            And of course to have fun ;)
                        </p>
                    </div>
                </section>
                <div className="container mt-5">
                    <div style={{ marginBottom: "28px" }}>
                        <button className="accordion accordion-about-us">Our Team</button>
                        <div className="panel">
                            <div className="container" style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-evenly"
                            }}>
                                <div className="card" align="center">
                                    <img src={SM} className="mx-auto" alt="Sagnik Majumder" />
                                    <h4 className="name-team">Sagnik Majumder</h4>
                                    <h4 className="role-team text-muted">Founder</h4>
                                    <a href="mailto:sagnik@campus24.in">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={VKR} className="mx-auto" alt="Vishnu Kumar Rai" />
                                    <h4 className="name-team">Vishnu Kumar Rai</h4>
                                    <h4 className="role-team text-muted">Community Head</h4>
                                    <a href="mailto:vishnu@campus24.in">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={SG} className="mx-auto" alt="Sayantan Ghosh" />
                                    <h4 className="name-team">Sayantan Ghosh</h4>
                                    <h4 className="role-team text-muted">
                                        Operations Head
                                    </h4>
                                    <a href="mailto:sayantan@campus24.in">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={DB} className="mx-auto" alt="Diganto Bhattacharya" />
                                    <h4 className="name-team">Diganto Bhattacharya</h4>
                                    <h4 className="role-team text-muted">Marketing Head</h4>
                                    <a href="mailto:diganto@campus24.in">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={RC} className="mx-auto" alt="Rohit Chattopadhyay" />
                                    <h4 className="name-team">Rohit Chattopadhyay</h4>
                                    <h4 className="role-team text-muted">
                                        Technical Advisor
                                    </h4>
                                    <a href="mailto:rohit@campus24.in">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={AD} className="mx-auto" alt="Ankita De" />
                                    <h4 className="name-team">Ankita De</h4>
                                    <h4 className="role-team text-muted">
                                        Head App Developer
                                    </h4>
                                    <a href="mailto:ankita.de10@gmail.com">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                                <div className="card" align="center">
                                    <img src={SB} className="mx-auto" alt="Sourajit Basu" />
                                    <h4 className="name-team">Sourajit Basu</h4>
                                    <h4 className="role-team text-muted">
                                        Head App Developer
                                    </h4>
                                    <a href="mailto:sourajit.basu99@gmail.com">
                                        <div className="mail-team" style={{ backgroundImage: `url(${mail})` }}></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About