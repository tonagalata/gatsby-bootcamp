import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => {
  return ( 
    <Layout>
      <Head title="Contact"/>
      <h1>Contact Me</h1>
        <p>Find me at github <a href="https://github.com/tonagalata" target="_blank" rel="noopener noreferrer">Galata tona</a></p>
        <p>Find me on Twitter <a href="https://twitter.com/@galata_tona" target="_blank" rel="noopener noreferrer">@galata_tona</a></p>
    </Layout>
  );
}
 
export default ContactPage;