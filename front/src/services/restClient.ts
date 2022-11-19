import { BACK_BASE_PATH } from "../consts/back-paths";

export const get = async (urlPostfix: string) => {
  const response = await fetch(BACK_BASE_PATH + urlPostfix);
  return response.json();
};
