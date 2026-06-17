import { type CreateClientConfig } from "./client/client.gen";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  auth: process.env.HOMEDATA_API_KEY,
});
