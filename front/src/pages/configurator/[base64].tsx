import { Box, Button, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { Engine } from "../../rendering-engine/components/engine";
import { useGetBuildTreeByBase64Code } from "../../rendering-engine/service/configuratorService";
import Link from "next/link";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";

const Configurator = () => {
    const router = useRouter();
    const { base64 } = router.query;

    const [data] = useGetBuildTreeByBase64Code(base64 as string);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                {data && <Engine data={data} />}
            </Box>
            <Center>
                <Link href={FRONT_CURRENT_PATH + ":3000/summary/" + base64}>
                    <Button>To Summary Page</Button>
                </Link>
            </Center>
        </>
    );
};

export default Configurator;
