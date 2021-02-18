import Head from 'next/head'
import Layout from '../components/layout/Layout'
import ContactMe from '../components/pages/contact/ContactMe'

export const Contact = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Contact</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href="https://icedevera.com/contact" />
      <meta
        name="description"
        content="Although I am currently focusing on my startup, I'm always open to new opportunities. Whether you have a question or just want to talk, feel free to hit me up."
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ice de Vera Contact" />
      <meta property="og:image" content="/favicon.ico" />
      <meta
        property="og:description"
        content="Although I am currently focusing on my startup, I'm always open to new opportunities. Whether you have a question or just want to talk, feel free to hit me up."
      />
      <meta property="og:url" content="https://icedevera.com/contact" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Ice de Vera Contact" />
      <meta
        name="twitter:description"
        content="Although I am currently focusing on my startup, I'm always open to new opportunities. Whether you have a question or just want to talk, feel free to hit me up."
      />
      <meta name="twitter:site" content="icedeveraa" />
      <meta name="twitter:creator" content="icedeveraa" />
    </Head>
    <Layout>
      <ContactMe />
    </Layout>
  </>
)

export default Contact
