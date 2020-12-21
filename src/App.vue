<template>
  <v-app>
    <v-main class="grey lighten-3">
      <Navbar />
      <v-content class="grey lighten-3 mx-4 mb-4">
        <router-view></router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
