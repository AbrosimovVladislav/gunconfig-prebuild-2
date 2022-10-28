import "../../styles/globals.css";
import {PageWrapper} from "../components/page-wrapper/index";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <PageWrapper>
                <Component {...pageProps} />
            </PageWrapper>
        </QueryClientProvider>
    );
}

export default MyApp;
