<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'app',
  setup() {
    onMounted(() => {
      const q = useQuasar();
      let dark = window.localStorage.getItem('__dark__');
      switch (dark) {
        case 'true':
          q.dark.set(true);
          break;
        case 'false':
          q.dark.set(false);
          break;
        default:
          q.dark.set('auto');
      }
    });
    return {};
  },
});
</script>
