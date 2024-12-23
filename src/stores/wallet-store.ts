import type { DIDDocument } from 'did-resolver'
import { defineStore } from 'pinia'

const useWalletStore = defineStore('walletStore', {
  state: () => ({
    did: '',
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
