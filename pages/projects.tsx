import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Work from '../components/pages/projects/Work'

export const Projects = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Work />
    </Layout>
  </>
)

export default Projects