<template>
  <q-layout view="hHh lpR lFr">
    <q-header
      reveal
      :class="$q.dark.isActive ? 'text-grey-2' : 'text-dark'"
      height-hint="98"
    >
      <q-toolbar :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-2'">
        <q-btn dense flat round icon="menu" @click="miniState = !miniState" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Quasar v2 Template
        </q-toolbar-title>

        <q-space />
        <q-btn
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

    <q-drawer
      :mini="miniState"
      show-if-above
      v-model="left"
      side="left"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item
            v-for="menu in menuItemList"
            :key="menu.title"
            :to="menu.to"
            active-class="bg-grey-9"
            class="rounded-borders q-ma-xs"
            style="border-radius: 16px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon
                :color="$q.dark.isActive ? 'grey-4' : 'grey-8'"
                :name="menu.icon"
              />
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
              <q-icon
                :color="$q.dark.isActive ? 'grey-4' : 'grey-8'"
                name="mdi-github"
              />
            </q-item-section>
            <q-item-section>Github</q-item-section>
            <q-item-section side>
              <q-icon name="mdi-launch" color="grey" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
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
      { icon: 'mdi-home', title: 'Home', to: '/home' },
      { icon: 'mdi-information', title: 'About', to: '/about' },
    ]);
    return { menuItemList };
  },
  data() {
    return {
      left: false,
      right: false,
      btn: true,
      miniState: true,
      drawer: true,
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
