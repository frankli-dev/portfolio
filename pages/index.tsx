import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Hero from '../components/pages/index/Hero/Hero'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Hero />
    </Layout>
  </>
)

export default Home
