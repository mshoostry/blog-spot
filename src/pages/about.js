import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => {
    return (
        <Layout>
            <SEO title="About Me" />
            <h1 style={{ fontStyle: "italic", fontWeight: 600, textAlign: "center" }}>Welcome!!!</h1>
            <p style={{ fontStyle: "italic", textAlign: "center", color: "green", fontSize: "2rem" }}>A bit about Me!!</p>
            <p>I'm Mehnaz. Variety is the spice of life, thus my interest in different kind of hobbies and activities keep me busy.
                I love traveling and it gives me an opportunity to engage in my favorite hobby, photography. </p>
            <p>Some of my activities involve being outdoors to enjoy nature’s beauty, going hiking or just hitting the gym to
                keep in shape. At home, I spend time with my cats, as they are great stress relievers, read a book and meditate to 
                free my mind of everything, basically recharging myself for another new day. </p>
            <p>There are moments when I pen down my thoughts, which led me towards poetry and writing blogs. Sometimes, sharing 
                your experiences opens you up to different arenas of life and in doing so I have come across many interesting 
                individuals and their share of life encounters.</p>
            <p>I created this blog site to share some of my thoughts. Hopefully, you will enjoy reading my blogs, as much as 
                I enjoyed creating them</p>
                <Link to="/">Back to Home page</Link>
        </Layout>
    )
}

export default About