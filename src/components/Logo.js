import React from "react"
import { GrGatsbyjs } from "react-icons/gr"
import { SiStrapi } from "react-icons/si"
const Logo = () => {
  return (
    <div style={{ display: "flex" }}>
      <h1
        className="text-shadow"
        style={{
          fontSize: "2rem",
          display: "inline-block",
          verticalAlign: "center",
        }}
      >
        Gatsby{" "}
      </h1>
      <GrGatsbyjs
        className="service-icon filter-shadow"
        style={{ margin: "0" }}
      />
      {/* <img src={logo} alt="web dev" /> */}
      <h1
        className="text-shadow"
        style={{
          fontSize: "2rem",
          display: "inline-block",
          verticalAlign: "center",
        }}
      >
        Strapi
      </h1>
      <SiStrapi
        className="service-icon filter-shadow"
        style={{ margin: "0" }}
      />
    </div>
  )
}

export default Logo
