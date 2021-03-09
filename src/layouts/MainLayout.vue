<template>
  <q-layout view="hHh lpR lFr">
    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Quasar v2 Template
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-home-outline" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
      </q-list>
      <!-- drawer content -->
    </q-drawer>
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="text-white text-caption q-px-sm q-py-xs bg-grey-8">
      Jannchie | jannchie@gmail.com
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
  data() {
    return {
      left: false,
      right: false,
    };
  },
});
</script>
