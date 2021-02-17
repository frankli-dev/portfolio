import Head from 'next/head'
import Layout from '../components/layout/Layout'
import ContactMe from '../components/pages/contact/ContactMe'

export const Contact = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <ContactMe />
    </Layout>
  </>
)

export default Contact