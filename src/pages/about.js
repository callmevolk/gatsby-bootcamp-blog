import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="O meni" />
      <h1>O meni</h1>
      <p>Ja sam entuzijasta svega što je dobro, a i par stvari koje nisu dobre.<Link to="/contact">Contact me</Link>.</p>
    </Layout>
  )
}

export default AboutPage;