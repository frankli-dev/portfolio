import "../styles/pages/_app.scss";
import { AppProps } from "next/app";
import PageLoader from "../components/common/PageLoader/PageLoader";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <PageLoader options={{ easing: "ease", speed: 500, trickleSpeed: 100 }} />
    <Component {...pageProps} />
  </>
);

export default App;
