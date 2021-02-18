import Head from 'next/head'
import Layout from '../components/layout/Layout'
import MySkills from '../components/pages/skills/MySkills'

export const Skills = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Skills</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://icedevera.com/skills" />
      <meta
        name="description"
        content="Skilled full-stack web developer with extensive knowledge of the best modern tools used to build impactful applications such as Javascript, Python, Dart, Flutter, React, Gatsby, Next, Shopify, Wordpress, AWS, Node, Express, MongoDB, PostgreSQL, and much more! "
      />
    </Head>
    <Layout>
      <MySkills />
    </Layout>
  </>
)

export default Skills
