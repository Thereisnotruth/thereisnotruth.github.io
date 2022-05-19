import React from "react"
import Layout  from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/card.css"

const AboutPage = () => (
  <Layout>
    <div className="card" style={{ position: "relative", top: "20%" }}>
      <h1>고태진</h1>
      <h2>thereisnotruth</h2>
      <div className="sidebar-link-item">
        <a
          href="https://github.com/Thereisnotruth"
          target="_blank"
        >
          <StaticImage
            className="sidebar-link-icon"
            src="../images/github-brands.svg"
            alt="github"
          />
        </a>
      </div>
      <div className="sidebar-link-item">
        <a
          href="https://www.linkedin.com/in/%ED%83%9C%EC%A7%84-%EA%B3%A0-76574b199/"
          target="_blank"
        >
          <StaticImage
            className="sidebar-link-icon"
            src="../images/linkedin-in-brands.svg"
            alt="linkedin"
          />
        </a>
      </div>
      <hr />
      하루를 쉬면 내가 알고, 이틀을 쉬면 남이 알고, 사흘을 쉬면 세상이 안다.
    </div>
  </Layout>
)

export default AboutPage