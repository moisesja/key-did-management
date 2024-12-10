import { EthrDID } from 'ethr-did'
import { InfuraProvider } from 'ethers/providers'

export default class DIDManager {
  chainNameOrId = 1 // mainnet
  //provider = InfuraProvider('<infura project ID>', chainNameOrId)

  constructor() {
    console.log('DID Manager initialized')
  }

  createPrivateKey(): any {
    const keypair = EthrDID.createKeyPair()

    console.log('Wallet created:', keypair)

    return keypair

    /*
    const privateKey = wallet.privateKey
    const address = computeAddress(privateKey)
    const publicKey = wallet.publicKey
    const net = typeof chainNameOrId === 'number' ? toQuantity(chainNameOrId) : chainNameOrId
    const identifier = net ? `did:ethr:${net}:${publicKey}` : publicKey
    return { address, privateKey, publicKey, identifier }*/
  }
  /*
  // Method to create a DID for the given private key
  createDID(privateKey: string): EthrDID {
    // Implementation to create a DID using EthrDID
    // ...
    return new EthrDID({ privateKey })
  }

  // Method to anchor DID to Arbitrum
  anchorDIDToArbitrum(did: EthrDID): void {
    // Implementation to anchor DID to Arbitrum
    // ...
  }*/
}
