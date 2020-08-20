import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>I am a person with a nice cock. <Link to="/contact">Contact me</Link>.</p>
    </Layout>
  )
}

export default AboutPage;