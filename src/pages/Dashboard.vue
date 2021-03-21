<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h4 q-my-xl">Dashboard</div>
    <div class="row text-grey-6 text-body1">
      <p>This is the dashboard page.</p>
    </div>
    <j-row class="q-mb-sm">
      <j-col v-for="i in 3" :key="i" class="col-12 col-sm-4">
        <q-card bordered flat>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </j-col>
    </j-row>
    <j-row class="q-mb-sm">
      <j-col v-for="i in 2" :key="i" class="col-12 col-sm-6">
        <progress-card
          icon="mdi-progress-check"
          :title="`Progress Task ${i}`"
          :progress="i * 0.27 ** 1.1"
        ></progress-card>
      </j-col>
    </j-row>
    <j-row class="q-mb-sm">
      <j-col v-for="i in 2" :key="i" class="col-12 col-sm-4">
        <stat-card
          icon="mdi-account"
          title="Current Value"
          value="1251"
        ></stat-card>
      </j-col>
    </j-row>
    <j-row class="q-mb-sm">
      <j-col v-for="i in 3" :key="i" class="col-12 col-sm-4">
        <q-card bordered flat>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </j-col>
    </j-row>
    <j-row class="q-mb-sm">
      <j-col v-for="i in 3" :key="i" class="col-12 col-sm-4">
        <q-card bordered flat>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </j-col>
    </j-row>
  </q-page>
</template>

<script lang="ts">
import JCol from 'src/components/JCol.vue';
import JRow from 'src/components/JRow.vue';
import ProgressCard from 'src/components/ProgressCard.vue';
import StatCard from 'src/components/StatCard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { JRow, ProgressCard, StatCard },
});
JCol;
</script>
