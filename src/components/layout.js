import React from "react"

import Header from './Layout/Header'
import Footer from './Layout/Footer'

import "./layout.css"
import "./static/style/Layout/common.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
