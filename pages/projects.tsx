import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Work from '../components/pages/projects/Work'

export const Projects = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Projects</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href="https://icedevera.com/projects" />
      <meta
        name="description"
        content="List of some things that I have built. Ranging from simple Python programs to full-stack front-end to back-end React applications"
      />

<meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Ice de Vera Projects" />
      <meta
        name="og:description"
        property="List of some things that I have built. Ranging from simple Python programs to full-stack front-end to back-end React applications"
      />
      <meta property="og:url" content="https://icedevera.com/about" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera Projects" />
      <meta
        name="twitter:description"
        content="List of some things that I have built. Ranging from simple Python programs to full-stack front-end to back-end React applications"
      />
      <meta name="twitter:site" content="icedeveraa" />
      <meta name="twitter:creator" content="icedeveraa" />
    </Head>
    <Layout>
      <Work />
    </Layout>
  </>
)

export default Projects
