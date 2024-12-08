<script setup lang="ts">
import { ref } from 'vue'
import useWalletStore from '@/stores/wallet-store'
import DidManager from '@/services/did/did-manager'

const store = useWalletStore()

const did = ref(store.did)
const didManager = new DidManager()

function generateDid() {
  didManager.createPrivateKey()
  //store.setDid(keyPair.did)

  // console.log('Generating DID', keyPair.privateKey)
  //store.setDid('new-generated-did')
  // Logic to generate DID
  did.value = 'new-generated-did'
}

function rotateKey() {
  console.log('Rotating key')
  // Logic to rotate key
  did.value = 'rotated-key-did'
}
</script>

<template>
  <v-container>
    <v-text-field label="DID" v-model="did" variant="solo-inverted"></v-text-field>
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
