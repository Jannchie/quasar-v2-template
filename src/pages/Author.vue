<template>
  <q-page padding>
    <div class="text-h4 q-my-xl">Author Information</div>
    <j-row class="q-mb-sm" v-if="data">
      <j-col class="column col-12 col-md-3">
        <q-card bordered flat class="q-mb-sm">
          <q-card-section class="text-center">
            <q-avatar class="fit">
              <img :src="data.avatar_url" :alt="data.name" />
            </q-avatar>
          </q-card-section>
        </q-card>
        <q-card bordered flat class="">
          <q-card-section>
            <div class="ellipsis">
              <q-icon name="mdi-domain" left /> {{ data.company }}
            </div>
            <div class="ellipsis">
              <q-icon name="mdi-email" left />
              {{ data.email ?? 'It is Secret' }}
            </div>
            <div class="ellipsis">
              <q-icon name="mdi-post" left /> {{ data.blog }}
            </div>
            <div class="ellipsis">
              <q-icon name="mdi-twitter" left />
              {{ data.twitter_username ?? 'None' }}
            </div>
          </q-card-section>
        </q-card>
      </j-col>
      <j-col class="col-12 col-md-9 column">
        <q-card bordered flat class="col col-auto q-mb-sm">
          <q-card-section v-if="following">
            <div class="text-caption text-grey-6">Following</div>
            <q-avatar
              v-for="user in following"
              :key="user.name"
              class="q-ma-xs ellipsis"
              size="lg"
            >
              <img :src="user.avatar_url" />
            </q-avatar>
          </q-card-section>
        </q-card>
        <div class="col-auto row q-col-gutter-sm">
          <div class="col-12 col-sm-4">
            <stat-card
              title="Public Repositories"
              icon="mdi-account"
              :value="data.public_repos"
            ></stat-card>
          </div>
          <div class="col-12 col-sm-4">
            <stat-card
              title="Followers"
              icon="mdi-account"
              :value="data.followers"
            ></stat-card>
          </div>
          <div class="col-12 col-sm-4">
            <stat-card
              title="Following"
              icon="mdi-account"
              :value="data.following"
            ></stat-card>
          </div>
        </div>
        <div v-if="repos" class="col-auto row q-col-gutter-sm">
          <div v-for="(rep, i) in repos" :key="i" class="col-4">
            <q-card bordered flat class="fit" style="min-height: 80px">
              <q-card-actions>
                <div class="text-body1">
                  {{ rep.name }}
                </div>
                <div class="text-caption ellipsis-2">
                  {{ rep.description }}
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </j-col>
    </j-row>
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
        <q-card
          v-ripple
          flat
          class="purple-gradient fit cursor-pointer"
          @click.stop="toAuthorGithub"
        >
          <div class="q-pa-lg text-center text-white text-h6">
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
import { GithubRepos } from '../models/github-repos';
import JRow from 'src/components/JRow.vue';
import JCol from 'src/components/JCol.vue';
import StatCard from 'src/components/StatCard.vue';
export default defineComponent({
  setup() {
    const $q = useQuasar();
    const data = ref<GithubUser>();
    const following = ref<Array<GithubUser>>();
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
    void api
      .get('https://api.github.com/users/jannchie/following')
      .then((res) => {
        following.value = res.data as Array<GithubUser>;
      });
    const repos = ref<Array<GithubRepos>>();
    void api.get('https://api.github.com/users/jannchie/repos').then((r) => {
      repos.value = r.data as Array<GithubRepos>;
    });
    return { data, following, repos };
  },
  components: { JRow, JCol, StatCard },
  methods: {
    toAuthorGithub() {
      if (this.data) {
        openURL(this.data.html_url);
      }
    },
  },
});
</script>
