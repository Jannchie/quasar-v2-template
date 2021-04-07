<template>
  <div style="height: 100vh">
    <q-layout view="hhh LpR lff" container class="shadow-2 rounded-borders fit">
      <q-header
        reveal
        :class="$q.dark.isActive ? 'text-grey-2' : 'text-dark'"
        height-hint="98"
      >
        <q-toolbar :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-2'">
          <q-btn dense flat round icon="menu" @click="menuBtnHandler" />
          <q-toolbar-title>
            <q-avatar class="q-mr-sm">
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
            Quasar v2 Template
          </q-toolbar-title>

          <q-space />
          <dark-mode-toggle></dark-mode-toggle>
        </q-toolbar>
      </q-header>

      <q-drawer
        :mini="miniState"
        v-model="left"
        side="left"
        :overlay="overlay"
        :width="200"
        :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-2'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <q-item
              v-for="menu in menuItemList"
              :key="menu.title"
              :to="menu.to"
              :active-class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-4'"
              class="q-ma-xs"
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
            <q-separator inset />
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
      </q-drawer>

      <!-- <q-drawer show-if-above v-model="right" side="right" bordered> </q-drawer> -->
      <q-page-container>
        <router-view v-slot="{ Component }">
          <transition
            mode="out-in"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>

      <q-footer
        reveal
        :class="`${
          $q.dark.isActive ? 'text-white bg-dark' : 'text-grey bg-white'
        } text-caption q-px-sm q-py-xs`"
      >
        Jannchie | jannchie@gmail.com
      </q-footer>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { openURL } from 'quasar';
import DarkModeToggle from 'src/components/DarkModeToggle.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { DarkModeToggle },
  name: 'MainLayout',
  setup() {
    let menuItemList = ref([
      { icon: 'mdi-home', title: 'Home', to: '/home' },
      {
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        to: '/dashboard',
      },
      { icon: 'mdi-chat', title: 'Chat', to: '/chat' },
      { icon: 'mdi-account', title: 'Author', to: '/author' },
      { icon: 'mdi-information', title: 'About', to: '/about' },
      { icon: 'mdi-view-agenda', title: 'Agenda', to: '/agenda' },
    ]);
    return { menuItemList };
  },
  data() {
    return {
      left: this.$q.screen.width < this.$q.screen.sizes.md ? false : true,
      right: false,
      btn: true,
      miniState: true,
      drawer: true,
      overlay: false,
    };
  },
  methods: {
    toGithub() {
      openURL('https://github.com/Jannchie/quasar-v2-template');
    },
    menuBtnHandler() {
      if (this.$q.screen.width < this.$q.screen.sizes.md) {
        // mobile
        this.miniState = true;
        this.left = !this.left;
        this.overlay = true;
      } else {
        this.left = true;
        this.miniState = !this.miniState;
        this.overlay = false;
      }
    },
  },
});
</script>
