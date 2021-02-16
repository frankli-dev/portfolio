import Head from 'next/head'
import Layout from '../components/layout/Layout'
import AboutMe from '../components/pages/about/AboutMe'

export const About = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <AboutMe />
    </Layout>
  </>
)

export default About