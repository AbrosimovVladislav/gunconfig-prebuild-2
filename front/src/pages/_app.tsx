import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import PageWrapper from "../components/common/pagewrapper/PageWrapper";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { globalTheme } from "../../styles/globalTheme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>GunCraft</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <MantineProvider withGlobalStyles withNormalizeCSS theme={globalTheme}>
                    <PageWrapper>
                        <Component {...pageProps} />
                    </PageWrapper>
                </MantineProvider>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
