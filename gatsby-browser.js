// This is the other way to wrapp root pages with Layout components
// it also need to set gatsby-ssr.js at the same time
const React = require("react")
const Layout = require("/src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout> // element represents page
}
