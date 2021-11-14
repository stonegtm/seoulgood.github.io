<template>
  <v-app light>
    <Navigation />
    <!-- <div style="margin-top:100px;"></div>   -->
    <v-main>
      <!-- <v-container class="pa-0"> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  cursor: url("./assets/img/cursors.png"), auto;
}
</style>
