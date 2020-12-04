import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { useAuth0 } from "@auth0/auth0-react"
// import faces from "../images/faces.jpg"

import "./blog.css"


const Blog = () => {

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

    const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            author
            publishedDate(fromNow: true)
            slug
            title
          }
        }
      }
    }
  `)
    return (   
        <Layout>
            <div><p style={{fontWeight: 600}}>Please login to view our blogs!!!</p></div>
            {
                !isAuthenticated && (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                )
                
            }
            {
                isAuthenticated && (
                    <div>
                        <SEO title="Blog" />
                        <h1>Blog</h1>
                        <div>
                            {
                                data.allContentfulBlogPost.edges.map((post, i) => {
                                    return (
                                        <div key={i}>
                                            <h2>{post.node.title}</h2>
                                            <p style={{ fontWeight: 200, fontSize: "0.8rem" }}>Published {post.node.publishedDate}</p>
                                            <p style={{ fontWeight: 300, fontSize: "0.9rem" }}>Written By {post.node.author}</p>
                                            <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                                            <hr style={{ height: "3px" }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => logout()}>Sign Out</button>
                    </div>
                )
            }
             
            <div>
            {/* <img src={faces} alt="Faces" /> */}
            <Link to="/">Back to Home page</Link>
            </div>
        </Layout>
      
    )
}


export default Blog
