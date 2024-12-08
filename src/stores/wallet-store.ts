import { defineStore } from 'pinia'

const useWalletStore = defineStore('walletStore', {
  state: () => ({
    did: '',
  }),
  actions: {
    setDid(did: string): void {
      this.did = did
    },
  },
})

export default useWalletStore
