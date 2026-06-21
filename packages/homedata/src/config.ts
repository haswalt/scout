import { type CreateClientConfig } from "./client/client.gen";

export const createClientConfig: CreateClientConfig = (config) => {
  return {
    ...config,
    auth: `Api-Key ${process.env.HOMEDATA_API_KEY}`,
    baseUrl:
      process.env.HOMEDATA_BASE_URL ??
      config?.baseUrl ??
      "https://api.homedata.co.uk",
  };
};
