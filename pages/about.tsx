import Head from 'next/head'
import Layout from '../components/layout/Layout'
import AboutMe from '../components/pages/about/AboutMe'

export const About = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | About</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href="https://icedevera.com/about" />
      <meta
        name="description"
        content="I am a graduate of Management Engineering with a minor in Information
          Technology from the Ateneo de Manila University, and I have always had
          a passion for business and technology. I have found that these
          combination of skills work hand in hand to help deliver the best
          results and exceed expectations. From analyzing business processes to developing web applications, I
          enjoy the work of improving & innovating processes that shape our
          world."
      />

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Ice de Vera About" />
      <meta
        name="og:description"
        property="I am a graduate of Management Engineering with a minor in Information
        Technology from the Ateneo de Manila University, and I have always had
        a passion for business and technology. I have found that these
        combination of skills work hand in hand to help deliver the best
        results and exceed expectations. From analyzing business processes to developing web applications, I
        enjoy the work of improving & innovating processes that shape our
        world."
      />
      <meta property="og:url" content="https://icedevera.com/about" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera About" />
      <meta
        name="twitter:description"
        content="I am a graduate of Management Engineering with a minor in Information
        Technology from the Ateneo de Manila University, and I have always had
        a passion for business and technology. I have found that these
        combination of skills work hand in hand to help deliver the best
        results and exceed expectations. From analyzing business processes to developing web applications, I
        enjoy the work of improving & innovating processes that shape our
        world."
      />
      <meta name="twitter:site" content="icedeveraa" />
      <meta name="twitter:creator" content="icedeveraa" />
    </Head>
    <Layout>
      <AboutMe />
    </Layout>
  </>
)

export default About
