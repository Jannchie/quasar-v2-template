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

        <q-space />
        <q-btn
          size="sm"
          :icon="
            this.$q.dark.isActive
              ? 'mdi-white-balance-sunny'
              : 'mdi-weather-night'
          "
          round
          push
          @click="darkToggle"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list>
        <q-item
          v-for="menu in menuItemList"
          :key="menu.title"
          :to="menu.to"
          class="rounded-borders q-ma-xs"
          style="border-radius: 16px"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon color="primary" :name="menu.icon" />
          </q-item-section>
          <q-item-section>{{ menu.title }}</q-item-section>
        </q-item>

        <q-item
          @click="toGithub"
          class="rounded-borders q-ma-xs"
          style="border-radius: 16px"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-github" />
          </q-item-section>
          <q-item-section>Github</q-item-section>
        </q-item>
      </q-list>
      <!-- drawer content -->
    </q-drawer>
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <!-- Example with wrapping only one DOM element / component -->
      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          enter-active-class="animated backInDown"
          leave-active-class="animated fadeOutDown"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer reveal class="text-white text-caption q-px-sm q-py-xs bg-grey-8">
      Jannchie | jannchie@gmail.com
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { openURL } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    let menuItemList = ref([
      { icon: 'mdi-home-outline', title: 'Home', to: '/' },
      { icon: 'mdi-information', title: 'About', to: '/about' },
    ]);
    return { menuItemList };
  },
  data() {
    return {
      left: false,
      right: false,
      btn: true,
    };
  },
  methods: {
    darkToggle() {
      this.$q.dark.toggle();
      window.localStorage.setItem('__dark__', String(this.$q.dark.isActive));
    },
    toGithub() {
      openURL('https://github.com/Jannchie/quasar-v2-template');
    },
  },
});
</script>
