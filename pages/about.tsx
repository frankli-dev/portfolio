import Head from 'next/head'
import Layout from '../components/layout/Layout'

export const About = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1>About</h1>
    </Layout>
  </>
)

export default About