<template>
  <div>
    <v-container class="pa-0 pb-4">
      <v-carousel
        id="carousel"
        delimiter-icon="mdi-circle-outline"
        :show-arrows="false"
        max-height="720"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in items" :key="i" :src="slide.src">
        </v-carousel-item>
      </v-carousel>
      <div id="text-head">
        <h2 style="display: block;">Seoul</h2>
        <h2 style="margin-left:5px;margin-top:-80px;">Goods</h2>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/img/testpicture.png")
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>
<style>
#text-head {
  position: absolute;
  top: 70px;
  font-size: 100px;
  margin-left: 30px;
  color: #7789c5;
}
#text-head h2 {
  font-style: italic;
  font-family: "PT Serif", serif !important;
}
@media screen and (max-width: 500px) {
  #text-head {
    font-size: 80px;
    top: 140px;
  }
}
.v-carousel__controls {
  bottom: 10px;
}
#carousel .mdi::before,
.mdi-set {
  font-size: 16px !important;
  color: #7789c5;
}
.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  height: 12px;
  width: 12px;
  margin: 8px;
  background-color: #7789c5;
  opacity: 1;
}
</style>
