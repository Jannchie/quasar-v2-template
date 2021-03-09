<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    return {};
  },
  mounted() {
    let dark = window.localStorage.getItem('__dark__');
    switch (dark) {
      case 'true':
        this.$q.dark.set(true);
        break;
      case 'false':
        this.$q.dark.set(false);
        break;
      default:
        this.$q.dark.set('auto');
    }
  },
});
</script>
