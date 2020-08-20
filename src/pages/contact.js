import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Here is my instagram profile!</p>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">Go to Gulag</a>
    </Layout>
  )
}

export default ContactPage;