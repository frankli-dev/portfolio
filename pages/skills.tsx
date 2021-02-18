import Head from 'next/head'
import Layout from '../components/layout/Layout'
import MySkills from '../components/pages/skills/MySkills'

export const Skills = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Skills</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href="https://icedevera.com/skills" />
      <meta
        name="description"
        content="Skilled full-stack web developer with extensive knowledge of the best modern tools used to build impactful applications such as Javascript, Python, Dart, Flutter, React, Gatsby, Next, Shopify, Wordpress, AWS, Node, Express, MongoDB, PostgreSQL, and much more!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ice de Vera Skills" />
      <meta property="og:image" content="/favicon.ico" />
      <meta
        property="og:description"
        content="Skilled full-stack web developer with extensive knowledge of the best modern tools used to build impactful applications such as Javascript, Python, Dart, Flutter, React, Gatsby, Next, Shopify, Wordpress, AWS, Node, Express, MongoDB, PostgreSQL, and much more!"
      />
      <meta property="og:url" content="https://icedevera.com/skills" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera Skills" />
      <meta
        name="twitter:description"
        content="Skilled full-stack web developer with extensive knowledge of the best modern tools used to build impactful applications such as Javascript, Python, Dart, Flutter, React, Gatsby, Next, Shopify, Wordpress, AWS, Node, Express, MongoDB, PostgreSQL, and much more!"
      />
      <meta name="twitter:site" content="icedeveraa" />
      <meta name="twitter:creator" content="icedeveraa" />
    </Head>
    <Layout>
      <MySkills />
    </Layout>
  </>
)

export default Skills
