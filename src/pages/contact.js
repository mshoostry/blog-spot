import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import butterFly from "../images/butterFly.jpg"

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact Us" />
            <h1>Contact Details</h1>
            <p>Our Address</p>
            <p>9865 Blogger's Roads</p>
			<p>Blogging Me City, Tx 679843</p>
			<p>469.888.1234</p>
            <img src={butterFly} alt="My Butterfly" />
            <Link to="/">Back to Home page</Link>
        </Layout>
    )
}

export default Contact