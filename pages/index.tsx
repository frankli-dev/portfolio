import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Hero from '../components/pages/index/Hero/Hero'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://icedevera.com" />
      <meta name="description" content="I am a full-stack web developer & business analyst based in the Philippines open to freelance opportunities. I am also the founder & CEO of a startup called drapem that aims to transform the fashion industry for the better. My inbox is always open, so feel free to contact me regarding any inquiries!" />
    </Head>
    <Layout>
      <Hero />
    </Layout>
  </>
)

export default Home
