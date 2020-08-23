import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const IndexPage = () => {
  return (
  <Layout>
    <Head title="Početna stranica" />
    <h1>Pozdrav!</h1>
    <h2>Test testis</h2>
    <p>Trebate li developera? <Link to="/contact">Kontaktirajte me</Link>.</p>
  </Layout>
  )
}

export default IndexPage;