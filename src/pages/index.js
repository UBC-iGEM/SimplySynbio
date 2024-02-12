import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Center } from "../components/constants"

const DisplayArticleDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  .gatsby-image-wrapper {
    margin: 15px;
    width: 15vw;
    @media only screen and (max-width: 600px) {
      width: 70vw;
      height: 20vh;
    }
  }
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <DisplayArticleDiv>
                <Center>
                  <GatsbyImage
                    image={getImage(post.frontmatter.frontImage)}
                    alt="article-img"
                  />
                </Center>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Center>
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <p><b><i>{post.frontmatter.author}</i></b></p>
                      <small>{post.frontmatter.date}</small>
                    </header>
                  </Center>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </DisplayArticleDiv>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          frontImage {
            childImageSharp {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  }
`
