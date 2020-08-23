import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Kontakt" />
      <h1>Kontakt informacije</h1>
      <p>Možete me kontaktirati preko sljedećih platformi:</p>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">Go to Gulag</a>
    </Layout>
  )
}

export default ContactPage;