<template>
  <q-page padding :style-fn="myTweak">
    <div class="fit column">
      <div class="col">
        <div class="row fit q-col-gutter-sm">
          <div class="col-8">
            <q-chat-message
              name="me"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Jane"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[`doing fine, how r you?`]"
              stamp="4 minutes ago"
            />
          </div>
          <div class="col-4">
            <q-scroll-area class="fit bg-grey-2">
              <q-list>
                <q-item v-for="i in 50" :key="i" clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar font-size="52px" color="teal" text-color="white">
                      <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>name</q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <div class="column q-col-gutter-sm">
          <div class="col">
            <q-input outlined v-model="text" outline autogrow />
          </div>
          <div class="col">
            <div class="row">
              <q-space />
              <q-btn
                class="col-12 col-lg-1 col-md-2"
                color="primary"
                push
                icon="check"
                label="OK"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const chats = ref([
      {
        name: 'a',
        text: 'balabala',
        avatar: '',
        stamp: new Date(),
        sent: false,
      },
      {
        name: 'a',
        msg: 'balabala',
        stamp: new Date(),
        sent: false,
      },
    ]);
    let text = ref('');
    return {
      chats,
      text,
    };
  },
  methods: {
    myTweak(offset: number) {
      return { height: offset ? `calc(100vh - ${offset}px)` : '100vh' };
    },
  },
});
</script>
