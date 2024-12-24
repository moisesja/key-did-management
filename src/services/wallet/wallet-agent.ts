import { createAgent, type IResolver } from '@veramo/core'

import { DIDResolverPlugin } from '@veramo/did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

const INFURA_PROJECT_ID = 'c4299e92edf640379357149e58a12d2f'

const rpcUrl = 'https://arbitrum-sepolia.infura.io/v3/c4299e92edf640379357149e58a12d2f'

const providerConfig = {
  // Arbitrum Sepolia
  networks: [{ name: '0x66eee', rpcUrl, registry: '0x03d5003bf0e79C5F5223588F347ebA39AfbC3818' }],
}

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID, ...providerConfig }),
      ...webDidResolver(),
    }),
  ],
})
