<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Wallet"></v-app-bar>

    <v-navigation-drawer>
      <v-list lines="one">
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>
