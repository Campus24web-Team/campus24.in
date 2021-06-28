import React from 'react'
import { Link } from "gatsby"

import LogoHeader from '../static/img/Logo_header.svg'

function Header() {
    return (
        <header>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{
                    borderRadius: "0 0 4px 4px",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 15,
                    width: "100vw",
                    backgroundColor: "#151D32",
                }}
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img
                            className="img-header"
                            style={{ margin: 0 }}
                            src={LogoHeader}
                            alt="Campus 24"
                        />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link
                                className="nav-item nav-link"
                                to="/why-campus24"
                                style={{
                                    color: "rgb(131, 204, 192)",
                                    maxWidth: "120px",
                                    fontFamily: '"lato"',
                                    fontSize: "17.5px",
                                    fontWeight: 400,
                                }}
                            >
                                Why C24
                            </Link>
                            <a
                                className="nav-item nav-link"
                                href="https://blog.campus24.in/"
                                style={{
                                    color: "rgb(131, 204, 192)",
                                    maxWidth: "120px",
                                    fontFamily: '"lato"',
                                    fontSize: "17.5px",
                                    fontWeight: 400,
                                }}
                            >
                                Blogs
                            </a>
                            <Link
                                className="nav-item nav-link"
                                to="/about-us"
                                style={{
                                    color: "rgb(131, 204, 192)",
                                    maxWidth: "120px",
                                    fontFamily: '"lato"',
                                    fontSize: "17.5px",
                                    fontWeight: 400,
                                }}
                            >
                                About
                            </Link>
                            <Link
                                className="nav-item nav-link"
                                to="/contact-us"
                                style={{
                                    color: "rgb(131, 204, 192)",
                                    maxWidth: "120px",
                                    fontFamily: '"lato"',
                                    fontSize: "17.5px",
                                    fontWeight: 400,
                                }}
                            >
                                Contact
                            </Link>
                            <Link
                                className="nav-item nav-link"
                                to="/newsletter"
                                style={{
                                    color: "rgb(131, 204, 192)",
                                    maxWidth: "120px",
                                    fontFamily: '"lato"',
                                    fontSize: "17.5px",
                                    fontWeight: 400,
                                }}
                            >
                                CampusBytes
                            </Link>
                        </div>
                    </div>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.bytera.campus24"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-app" style={{ cursor: 'pointer' }}>Get the app</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ outline: "none" }}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header