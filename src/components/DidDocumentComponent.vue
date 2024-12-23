<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useWalletStore from '@/stores/wallet-store'

// Use Pinia store to get didDocument
const store = useWalletStore()
const { didDocument } = storeToRefs(store)

//const formattedDidDocument = JSON.stringify(JSON.parse(didDocument.value), null, 2)
const formattedDidDocument = didDocument
</script>

<template>
  <v-card text="DID Document">
    <v-container>
      <pre>{{ formattedDidDocument }}</pre>
    </v-container>
  </v-card>
</template>

<style scoped>
pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}
</style>
