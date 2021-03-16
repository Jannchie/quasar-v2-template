<template>
  <q-card
    bordered
    flat
    style="margin-top: 14px; vertical-align: text-top; min-height: 128px"
  >
    <div class="row" style="position: absolute; margin-top: -14px; left: 14px">
      <q-card class="col-auto bg-primary offset-card rounded q-pa-sm">
        <q-icon v-if="icon" color="grey-2" size="64px" :name="icon" />
      </q-card>
    </div>
    <q-card-section class="text-right" style="padding-left: 86px">
      <div class="text-h6">
        {{ title }}
      </div>
      <div class="text-body2">{{ value }}</div>
    </q-card-section>
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
    value: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
