import type { DIDDocument } from 'did-resolver'
import { defineStore } from 'pinia'

const useWalletStore = defineStore('walletStore', {
  state: () => ({
    did: 'did:ethr:0x66eee:0x02fb22f60578881e754619906532682e2e054720f6e3ef9176f009858dbd259844',
    didDocument: null as DIDDocument | null,
  }),
  actions: {
    setDid(did: string): void {
      this.did = did
    },
    setDidDocument(didDocument: DIDDocument | null): void {
      this.didDocument = didDocument
    },
  },
})

export default useWalletStore
