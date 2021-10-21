import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="strapiデータ" />
      <main>
        <section className="projects-page">
          <Projects title="all Projects" projects={projects} />
        </section>
      </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      totalCount
      nodes {
        Description
        featured
        GitHub
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
