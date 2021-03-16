<template>
  <q-page padding>
    <j-row class="items-center justify-center">
      <j-col class="col-12 col-sm-8">
        <agenda-item />
      </j-col>
      <j-col class="col-12 col-sm-8">
        <agenda-item />
      </j-col>
    </j-row>
  </q-page>
</template>

<script lang="ts">
import AgendaItem from 'src/components/AgendaItem.vue';
import JRow from 'src/components/JRow.vue';
import JCol from 'src/components/JCol.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { AgendaItem, JRow, JCol },
  setup() {
    return {};
  },
});
</script>
