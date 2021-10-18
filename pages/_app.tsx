import '../styles/pages/_app.scss'
import { AppProps } from 'next/app'
import PageLoader from '../components/common/PageLoader/PageLoader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../utilities/ga'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <PageLoader options={{ easing: 'ease', speed: 500, trickleSpeed: 100 }} />
      <Component {...pageProps} />
    </>
  )
}

export default App
