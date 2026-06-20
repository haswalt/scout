import { type CreateClientConfig } from "./client/client.gen";

export const createClientConfig: CreateClientConfig = (config) => {
  return {
    ...config,
    auth: `Api-Key ${process.env.HOMEDATA_API_KEY}`,
  };
};
