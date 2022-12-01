import { Box, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { Engine } from "../../rendering-engine/components/engine";
import { useGetBuildTreeByBase64Code } from "../../rendering-engine/service/configuratorService";

const Configurator = ({ testData }) => {
    const router = useRouter();
    const { base64 } = router.query;

    const [data] = useGetBuildTreeByBase64Code(base64 as string);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                {data && <Engine data={data} />}
            </Box>
        </MantineProvider>
    );
};

export async function getServerSideProps() {
    // fetch

    return {
        props: { testData: "test" },
    };
}

export default Configurator;
