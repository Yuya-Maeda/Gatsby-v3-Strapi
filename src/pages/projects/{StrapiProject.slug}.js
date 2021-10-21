import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.Description}
        image={data.strapiProject.image.localFile.publicURL}
      />
      <main className="project-template-page">
        <h2>{data.strapiProject.title}</h2>

        <p>{data.strapiProject.Description}</p>
        <GatsbyImage
          image={getImage(data.strapiProject.image.localFile)}
          alt={data.strapiProject.title}
          style={{ margin: "70px", maxWidth: "800px" }}
        />
      </main>
    </>
  )
}
export const query = graphql`
  query getSingleProject($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      Description
      title
      slug
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
export default ProjectTemplate
