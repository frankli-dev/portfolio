import Head from 'next/head'
import Layout from '../components/layout/Layout'
import MySkills from '../components/pages/skills/MySkills'

export const Skills = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <MySkills />
    </Layout>
  </>
)

export default Skills