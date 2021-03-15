<template>
  <q-page padding>
    <div class="text-h4 q-mb-xl">Author Information</div>
    <j-row v-if="data">
      <j-col class="col-12 col-sm-4">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-card flat bordered>
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
      <j-col class="col-12 col-sm-8">
        <q-card flat bordered class="fit">
          <q-card-section class="fit">
            <j-row class="text-center fit content-center justify-around">
              <j-col class="col-auto">
                <div class="text-h4">{{ data.followers }}</div>
                <div class="text-grey-6">Followers</div>
              </j-col>
              <j-col class="col-auto">
                <div class="text-h4">{{ data.public_repos }}</div>
                <div class="text-grey-6">Public Repositories</div>
              </j-col>
              <j-col class="col-auto">
                <div class="text-h4">{{ data.public_gists }}</div>
                <div class="text-grey-6">Public Gists</div>
              </j-col>
              <j-col class="col-auto">
                <div class="text-h4">{{ data.following }}</div>
                <div class="text-grey-6">Following</div>
              </j-col>
              <j-col class="col-auto">
                <div class="text-h4">{{ data.public_repos }}</div>
                <div class="text-grey-6">Following</div>
              </j-col>
            </j-row>
          </q-card-section>
        </q-card>
      </j-col>
      <j-col class="col-auto">
        <q-card flat bordered class="fit">
          <q-card-section>
            <q-icon name="mdi-domain" left /> {{ data.company }}
            <br />
            <q-icon name="mdi-email" left /> {{ data.email ?? 'None' }}
            <br />
            <q-icon name="mdi-post" left /> {{ data.blog }}
            <br />
            <q-icon name="mdi-twitter" left />
            {{ data.twitter_username ?? 'None' }}
          </q-card-section>
        </q-card>
      </j-col>
      <j-col>
        <q-card flat class="purple-gradient fit" @click="toAuthorGithub">
          <div v-ripple class="q-pa-lg text-center text-white text-h6">
            <q-icon size="lg" name="mdi-github" />
            <br />
            <div class="gt-sm">To Github Page</div>
          </div>
        </q-card>
      </j-col>
    </j-row>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';
import { openURL, useQuasar } from 'quasar';
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
  methods: {
    toAuthorGithub() {
      if (this.data) {
        openURL(this.data.html_url);
      }
    },
  },
});
</script>
