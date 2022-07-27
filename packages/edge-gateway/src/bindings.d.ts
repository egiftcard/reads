import Toucan from 'toucan-js'
import { Logging } from '@web3-storage/worker-utils/loki'
import { IpfsGatewayRacer } from 'ipfs-gateway-race'

export {}

export interface EnvInput {
  ENV: string
  DEBUG: string
  IPFS_GATEWAYS: string
  GATEWAY_HOSTNAME: string
  EDGE_GATEWAY_API_URL: string
  REQUEST_TIMEOUT?: number
  SENTRY_DSN?: string
  LOKI_URL?: string
  LOKI_TOKEN?: string
  DENYLIST: KVNamespace
  API: Fetcher
}

export interface EnvTransformed {
  VERSION: string
  BRANCH: string
  COMMITHASH: string
  SENTRY_RELEASE: string
  REQUEST_TIMEOUT: number
  IPFS_GATEWAY_HOSTNAME: string
  IPNS_GATEWAY_HOSTNAME: string
  ipfsGateways: Array<string>
  sentry?: Toucan
  log?: Logging
  gwRacer: IpfsGatewayRacer
}

export type Env = EnvInput & EnvTransformed

declare global {
  const BRANCH: string
  const VERSION: string
  const COMMITHASH: string
  const SENTRY_RELEASE: string
  const ENV: string
}
