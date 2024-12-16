import { EthrDID, type KeyPair } from 'ethr-did'
import { type DIDDocument, Resolver } from 'did-resolver'
import { getResolver } from 'ethr-did-resolver'

export default class DIDManager {
  //provider = InfuraProvider('<infura project ID>', chainNameOrId)

  createPrivateKey(): KeyPair {
    const keypair: KeyPair = EthrDID.createKeyPair()

    console.log('Wallet created:', keypair)

    return keypair
  }

  // Method to create a DID for the given private key
  createDID(keypair: KeyPair): string {
    const chainNameOrId = 421614

    const ethrDid = new EthrDID({ ...keypair, chainNameOrId })

    console.log('DID created:', ethrDid)

    return ethrDid.did
  }

  async resolveDID(did: string): Promise<DIDDocument | null> {
    const rpcUrl = 'https://arbitrum-sepolia.infura.io/v3/c4299e92edf640379357149e58a12d2f'

    const providerConfig = {
      networks: [
        { name: '0x66eee', rpcUrl, registry: '0x03d5003bf0e79C5F5223588F347ebA39AfbC3818' },
        {
          name: 'development',
          rpcUrl: 'http://localhost:7545',
          registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b',
        },
      ],
    }

    const resolver = getResolver(providerConfig)

    console.log('Resolver:', resolver)

    const didResolver = new Resolver(resolver)

    console.log('DID Resolver:', didResolver)

    const didResolutionResult = await didResolver.resolve(did)

    console.log('DID Document:', didResolutionResult)

    return didResolutionResult.didDocument
  }
  /*
  // Method to anchor DID to Arbitrum
  anchorDIDToArbitrum(did: EthrDID): void {
    // Implementation to anchor DID to Arbitrum
    // ...
  }*/
}
