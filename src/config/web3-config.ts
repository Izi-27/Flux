"use client";

import { type Config, createConfig } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import { wagmiConfig } from "./wagmi";

let config: Config | null = null;
let queryClient: QueryClient | null = null;

export function getWeb3Config() {
  if (!config) {
    config = createConfig(wagmiConfig);
  }
  return config;
}

export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;
}