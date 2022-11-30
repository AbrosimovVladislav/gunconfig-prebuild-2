import {BACK_BASE_PATH, BACK_BASE_PATH_CONFIGURATOR} from "../consts/back-paths";

export const get = async (urlPostfix: string) => {
  const response = await fetch(BACK_BASE_PATH + urlPostfix);
  return response.json();
};

export const getConfiguratorBack = async (urlPostfix: string) => {
  const response = await fetch(BACK_BASE_PATH_CONFIGURATOR + urlPostfix);
  return response.json();
};
