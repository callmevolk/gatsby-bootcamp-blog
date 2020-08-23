import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Lista blog postova</p>
      <ol className={blogStyles.posts}>
        {
          data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li key={edge.node.title} className={blogStyles.post}>
                <Link to={edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

export default BlogPage;