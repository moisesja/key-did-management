<script setup lang="ts">
import { ref } from 'vue'
import useWalletStore from '@/stores/wallet-store'
import { agent } from '@/services/wallet/wallet-agent'

const store = useWalletStore()

const did = ref(store.did)

async function generateDid(): Promise<void> {
  const resolutionResult = await agent.resolveDid({
    didUrl: did.value,
  })

  console.log('Resolution result', resolutionResult)
  store.setDidDocument(resolutionResult.didDocument)
}

function rotateKey() {
  console.log('Rotating key')
  // Logic to rotate key
  did.value = 'rotated-key-did'
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="DID" v-model="did" variant="solo-inverted"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn @click="generateDid" density="compact">Generate DID</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn @click="rotateKey" density="comfortable">Rotate Key</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
