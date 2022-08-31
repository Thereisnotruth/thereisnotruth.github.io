import React from "react"
import Layout  from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/card.css"

const AboutPage = () => (
  <Layout>
    <div className="card" style={{ position: "relative", top: "20%" }}>
      <h1>고태진</h1>
      <h2>thereisnotruth</h2>

    </div>
  </Layout>
)

export default AboutPage