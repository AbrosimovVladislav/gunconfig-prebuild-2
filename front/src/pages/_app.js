import "../../styles/globals.css";
import { PageWrapper } from "../components/page-wrapper/index";

function MyApp({ Component, pageProps }) {
    return (
        <PageWrapper>
            <Component {...pageProps} />
        </PageWrapper>
    );
}

export default MyApp;
