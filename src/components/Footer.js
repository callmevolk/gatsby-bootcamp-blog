import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import FooterStyles from './Footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={FooterStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} &copy; 2020</p>
    </footer>
  )
}

export default Footer;