import {useRouter} from "next/router";

const BuildSummary = ({}) => {
    const router = useRouter();
    const {base64} = router.query;


    return (
        <div>
            Build Summary Page - {base64}
        </div>
    );
};

export default BuildSummary;
