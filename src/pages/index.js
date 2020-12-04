import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 style={{ fontStyle: "italic", fontWeight: 600, textAlign: "center" }}>Words - our inner Self-Reflection....</h3>
    <h2 style={{ fontStyle: "italic", fontWeight: 300, textAlign: "center" }}>You’ve ventured into a blog site, where we can experience and share our ideas and 
      thoughts. A very friendly site for all to read and enjoy….</h2>
    <h2 style={{ fontStyle: "italic", fontWeight: 300, textAlign: "center" }}>Words are magical and musical. So, gather around to share, inspire and enjoy the musical notes!!!!!</h2>
    <h2 style={{ fontStyle: "italic", fontWeight: 300, textAlign: "center" }}>Let this be a medium for the young and old to contribute into the world through vibrancy of alphabets, 
        put together into sentences that further lead us to appreciate the Blogs…..</h2>
    <Link to="/blog">Click here and let's get started!</Link>
  </Layout>
)

export default IndexPage
