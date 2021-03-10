<template>
  <q-toggle
    v-model="dark"
    :icon="
      this.$q.dark.isActive ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
    "
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
export default defineComponent({
  setup() {
    let q = useQuasar();
    let dark = ref(q.dark.isActive);
    watch(dark, (val) => {
      q.dark.set(val);
      window.localStorage.setItem('__dark__', String(q.dark.isActive));
    });
    return { dark };
  },
});
</script>
