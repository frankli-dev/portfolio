import Head from 'next/head'
import Layout from '../components/layout/Layout'
import ContactMe from '../components/pages/contact/ContactMe'

export const Contact = (): JSX.Element => (
  <>
    <Head>
      <title>Ice de Vera | Contact</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://icedevera.com/contact" />
      <meta
        name="description"
        content="Although I am currently focusing on my startup, I'm always open to new opportunities. Whether you have a question or just want to talk, feel free to hit me up."
      />
    </Head>
    <Layout>
      <ContactMe />
    </Layout>
  </>
)

export default Contact
