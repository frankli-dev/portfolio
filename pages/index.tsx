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
        content="Hi! I am a full-stack web developer open to freelance opportunities. I specialize in building apps for startups, small businesses and individuals. Whether you want to build an online pizza shop or create a multi-vendor marketplace my inbox is always open, so feel free to contact me!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ice de Vera" />
      <meta property="og:image" content="/favicon.ico" />
      <meta
        property="og:description"
        content="Hi! I am a full-stack web developer open to freelance opportunities. I specialize in building apps for startups, small businesses and individuals. Whether you want to build an online pizza shop or create a multi-vendor marketplace my inbox is always open, so feel free to contact me!"
      />
      <meta property="og:url" content="https://icedevera.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera" />
      <meta
        name="twitter:description"
        content="Hi! I am a full-stack web developer open to freelance opportunities. I specialize in building apps for startups, small businesses and individuals. Whether you want to build an online pizza shop or create a multi-vendor marketplace my inbox is always open, so feel free to contact me!"
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
