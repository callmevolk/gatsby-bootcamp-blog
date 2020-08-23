import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Stranica nije pronađena</h1>
      <p><Link to="/">Nazad na početnu stranu</Link></p>
    </Layout>
  )
}

export default NotFound;