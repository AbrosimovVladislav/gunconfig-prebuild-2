import { BASE_PATH_LOCAL, BASE_PATH_TEST } from "../consts/back-paths";

export const get = async (urlPostfix: string) => {
    const response = await fetch(BASE_PATH_TEST + urlPostfix);
    // const response = await fetch(BASE_PATH_LOCAL + urlPostfix);
    return response.json();
};
