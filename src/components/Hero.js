import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
const Hero = () => {
  return (
    <Wrapper>
      <header className="hero">
        <StaticImage
          src="../assets/images/robin-schreiner-7y4858E8PfA-unsplash.jpg"
          alt="hero-background"
          className="hero-bg-image"
          placeholder="blurred"
        />
        <section className="section-center hero-center">
          <article
            className="hero-info"
            style={{ zIndex: "2", backgroundColor: "transparent" }}
          >
            <div style={{ backgroundColor: "transparent" }}>
              <h1>Gatsby&amp;Strapi デモ </h1>
              <div className="underline"></div>
              <h4 style={{ fontSize: "2rem" }}>ヘッドレスCMSサイト構築デモ</h4>
              <Link to="/contact" className="btn">
                お問合せ
              </Link>
              <div className="social-links">
                {socialLinks.map(link => {
                  return (
                    <a href={link.url} key={link.id} className="social-link">
                      {link.icon}
                    </a>
                  )
                })}
              </div>
            </div>
          </article>
          <StaticImage
            src="../assets/images/undraw_Real_time_sync_re_nky7.svg"
            alt="portfolio"
            className="hero-img"
            placeholder="blurred"
          />
        </section>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .hero {
    background-image: url("/src/assets/images/projects-1.jpg");
  }
`

export default Hero
