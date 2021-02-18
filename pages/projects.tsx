import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Work from '../components/pages/projects/Work'

export const Projects = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Projects</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://icedevera.com/projects" />
      <meta
        name="description"
        content="List of some things that I have built. Ranging from simple Python programs to full-stack front-end to back-end React applications"
      />
    </Head>
    <Layout>
      <Work />
    </Layout>
  </>
)

export default Projects
