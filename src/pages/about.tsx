import React from "react"
import Layout  from "../components/layout"
import Seo from "../components/seo"

import "../styles/card.css"

const AboutPage = () => (
  <Layout>
    <div className="card about-card">
      <h1>고태진</h1>
      <h2>thereisnotruth</h2>

    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="About" />
