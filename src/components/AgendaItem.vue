<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-body1">{{ desc }}</div>
    </q-card-section>
    <q-linear-progress
      :value="rate"
      rounded
      color="positive"
      track-color="negative"
      stripe
      class="q-mt-sm"
    />
    <q-card-actions class="justify-between">
      <q-btn
        size="md"
        color="positive"
        class="text-overline"
        push
        @click.stop="clickPro"
      >
        PRO {{ p }}
      </q-btn>
      <q-btn
        label="Comments"
        size="md"
        class="text-overline"
        flat
        color="primary"
        @click="comment = true"
      />
      <q-btn
        size="md"
        color="negative"
        class="text-overline"
        push
        @click.stop="clickCon"
      >
        {{ c }} CON
      </q-btn>
    </q-card-actions>
  </q-card>

  <q-dialog
    v-model="comment"
    persistent
    transition-show="flip-down"
    transition-hide="flip-up"
  >
    <q-card class="bg-primary text-white">
      <q-bar>
        <q-icon name="network_wifi" />
        <q-icon name="network_cell" />
        <q-icon name="battery_full" />
        <div>9:34</div>

        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  props: {
    title: { default: '议程名称' },
    desc: { default: '议程描述' },
    pro: { default: 0 },
    con: { default: 0 },
  },
  setup(props) {
    const p = ref<number>(props.pro);
    const c = ref<number>(props.con);
    const rate = computed(() => {
      if (p.value === c.value && c.value === 0) {
        return 0.5;
      } else {
        return p.value / (c.value + p.value);
      }
    });
    const clickPro = () => {
      p.value++;
    };
    const clickCon = () => {
      c.value++;
    };
    const comment = ref(false);
    return { comment, rate, p, c, clickPro, clickCon };
  },
});
</script>
