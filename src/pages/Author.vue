<template>
  <q-page padding>
    {{ data }}
    <j-row>
      <j-col class="col-4">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-card flat bordered v-if="data">
            <div class="row">
              <q-avatar
                class="col-auto"
                size="140px"
                font-size="52px"
                color="teal"
                text-color="white"
                :square="true"
              >
                <img :src="data.avatar_url" />
              </q-avatar>
              <q-card-section class="col">
                <div class="text-h6">{{ data.name }}</div>
                <div class="text-subtitle2 ellipsis">
                  {{ data.location }}
                </div>
                <div class="text-subtitle2 ellipsis-2-lines">
                  {{ data.bio }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </transition>
      </j-col>
    </j-row>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { GithubUser } from '../models/github-user-info';
import JRow from 'src/components/JRow.vue';
import JCol from 'src/components/JCol.vue';
export default defineComponent({
  setup() {
    const $q = useQuasar();
    const data = ref<GithubUser>();
    void api
      .get('https://api.github.com/users/jannchie')
      .then((res) => {
        data.value = res.data as GithubUser;
      })
      .catch(() => {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem',
        });
      });
    return { data };
  },
  components: { JRow, JCol },
});
</script>
