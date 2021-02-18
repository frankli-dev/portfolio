import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Hero from '../components/pages/index/Hero/Hero'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href="https://icedevera.com" />
      <meta
        name="description"
        content="I am a full-stack web developer & business analyst based in the Philippines open to freelance opportunities. I am also the founder & CEO of a startup called drapem that aims to transform the fashion industry for the better. My inbox is always open, so feel free to contact me regarding any inquiries!"
      />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Ice de Vera" />
      <meta
        name="og:description"
        property="og:description"
        content="I am a full-stack web developer & business analyst based in the Philippines open to freelance opportunities. I am also the founder & CEO of a startup called drapem that aims to transform the fashion industry for the better. My inbox is always open, so feel free to contact me regarding any inquiries!"
      />
      <meta property="og:url" content="https://icedevera.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera" />
      <meta
        name="twitter:description"
        content="I am a full-stack web developer & business analyst based in the Philippines open to freelance opportunities. I am also the founder & CEO of a startup called drapem that aims to transform the fashion industry for the better. My inbox is always open, so feel free to contact me regarding any inquiries!"
      />
      <meta name="twitter:site" content="icedeveraa" />
      <meta name="twitter:creator" content="icedeveraa" />
    </Head>
    <Layout>
      <Hero />
    </Layout>
  </>
)

export default Home
