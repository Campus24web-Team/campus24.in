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
                            a balance between fun, productivity and in turn help them rediscover their passions.
                        <br />
                        Our platform will not only unify various students of similar interests, but entire India’s student community. 
                        We will bring a sense of belongingness among students of all campuses.
                        <br />
                        Campus24 will revolutionize the interconnections between colleges fueling collaboration, entrepreneurial spirit, 
                        talent development, learning experience and team spirit.
                        <br />
                        It was surveyed that about 60% students are bored of the generic social media which caters to all age groups. 
                        The need of the hour is a platform tailor made for the students of our country, their interests, their mentality and their talents. Our unique idea of bringing batches and colleges together would exponentially 
                        increase one’s network and help them take on life with a headstart.
                        </p>
                        <h2 className="mt-5" style={{ color: "#0cffa5" }}>VISION</h2>
                        <p>
                        Our Vision is to create India's largest community based social platform for students, with thousand 
                        of student run communities from higher education, sports, festivities to entertainment, where 
                        they can explore new interests, meet new friends and be their authentic self.
                        
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
                        Campus24 is an application designed to unite India’s youth by providing a platform -
                        </p>
                        <ul>
                            <li>
                            to have FUN in a social networking domain EXCLUSIVELY for college students (no outsiders!).
                            </li>
                            <li>
                            to DISCOVER one’s interests and talents by choosing to join a wide variety of communities. Be it gaming, sports, exam prep, coding, entrepreneurship, etc., find your own community at Campus24!
                            </li>
                            <li>
                            to COMMUNICATE with anyone and everyone at Campus24 to share ideas and make new friends!
                            </li>
                            <li>
                            to CREATE new Camps or interest groups, promote and make it one of largest India’s youth community!
                            </li>
                            <li>
                            To FIND other like-minded people across the colleges in India through the community groups.
                            </li>
                            <li>
                            To REWARD the student content creators of India by being awarded from the users for their contribution!
                            </li>
                            <li>
                            To BECOME the trendiest and biggest youth Influencer of India!
                            </li>
                        </ul>
                        <p>
                        Campus24 plans to unite the multitude of colleges/universities of India by providing a common 
                        platform to create, join and interact with any type of student community. Easy to form a new community 
                        with loads of options to tailor-make and design your community, a region to find new communities and discover 
                        your interests in college life, and a common space to interact with any member of the communities makes Campus24 
                        one of the first dedicated platform exclusively for the college students of India.
                        </p>
                        <p>
                        Be it anonymous confessions, talent showcasing pictures or videos, study discussions, opinions and views or 
                        simply memes about your campus and friends – join or create communities at Campus24 for each of your needs; 
                        express yourself freely and have fun in this EXCLUSIVE College social platform! Also get the opportunity to award 
                        and in-turn get rewarded for exciting/helpful/trendy content! <span role="img" aria-label="star">🌟</span>.
                        </p>
                        <p>
                        A single application for India’s vast youth with a space for each of their needs and interests!
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