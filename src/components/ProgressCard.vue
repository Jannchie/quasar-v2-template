<template>
  <q-card
    bordered
    flat
    style="margin-top: 14px; vertical-align: text-top; min-height: 128px"
  >
    <div class="row" style="position: absolute; margin-top: -14px; left: 14px">
      <q-card class="col-auto bg-primary offset-card rounded q-pa-sm">
        <q-icon v-if="icon" color="grey-2" left size="xs" :name="icon" />
        <span class="text-grey-2">{{ title }}</span>
      </q-card>
      <q-card class="col-auto bg-primary text-grey-2 q-ml-xs">
        <div class="q-pa-sm">{{ Math.round(progress * 100) }} %</div>
      </q-card>
    </div>
    <q-card-section>
      <q-linear-progress
        :value="progress"
        rounded
        stripe
        color="primary"
        track-color="grey-5"
        size="6px"
        class="q-mt-lg"
      />
    </q-card-section>
    <q-card-actions align="center">
      <q-space />
      <q-btn push text-color="primary" label="Stop" />
      <q-btn push color="primary" label="Status" />
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    progress: {
      type: Number,
      default: 0.1,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
