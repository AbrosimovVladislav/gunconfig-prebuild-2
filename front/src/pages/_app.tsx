import "../../styles/globals.css";
import {QueryClientProvider, QueryClient} from "react-query";
import Head from "next/head";
import PageWrapper from "../components/page-wrapper/page-wrapper";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  return (
      <>
        <Head>
          <title>Gun config</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
              rel="stylesheet"/>
        </Head>
        <QueryClientProvider client={queryClient}>
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </QueryClientProvider></>

  );
}

export default MyApp;
