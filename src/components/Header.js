import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './Header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Home</Link></li>
          <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>About</Link></li>
          <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Blog</Link></li>
          <li><Link to="/contact" className={`${headerStyles.navItem} ${headerStyles.navItemLast}`} activeClassName={headerStyles.navItemActive}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;