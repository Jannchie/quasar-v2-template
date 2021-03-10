<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h4 q-mb-xl">About</div>
    <div class="row text-grey-6 text-body1">
      <p>This is the about page.</p>
      <p>
        This is a project template that uses Quasar v2 and Vue.js V3.Designed to
        help developers (myself) quickly prototype projects.
      </p>
      <p>
        Quasar is a really cool project.It provides more diverse components and
        richer documentation than Vuetify. Quasar offers a nice push-style
        button.It also completes the prefabricated layout.Vuetify's layout is
        often confusing. Quasar's CLI tools are also very powerful, with
        built-in commands for generating pages and layouts.
      </p>
      <p>
        It also has some drawbacks, such as a CSS preset class without rounded
        corners. Grid layouts are also not as natural as Vuetify encapsulates
      </p>
      <p>I think we'll probably see more Quasar development in the future.</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
});
</script>
