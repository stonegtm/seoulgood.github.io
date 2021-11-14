<template>
  <div>
    <v-col id="featured-section" style="background: #c3d5f5">
      <v-container>
        <h2 id="featured-start">Featured Brand</h2>
        <v-row>
          <v-col id="featured" lg="4" cols="12" style="position: relative">
            <v-col class="imagefeatured1" style="--i: 1">
              <img src="~assets/img/fue.png" width="300px" alt="" />
            </v-col>
            <v-col class="imagefeatured2" style="--i: 1">
              <img src="~assets/img/fue2.png" width="300px" alt="" />
            </v-col>
          </v-col>
          <v-col id="featured" lg="4" cols="12" style="position: relative">
            <v-col class="imagefeatured1" style="--i: 1">
              <img src="~assets/img/fue.png" width="300px" alt="" />
            </v-col>
            <v-col class="imagefeatured2" style="--i: 1">
              <img src="~assets/img/fue2.png" width="300px" alt="" />
            </v-col>
          </v-col>
          <v-col id="featured" lg="4" cols="12" style="position: relative">
            <v-col class="imagefeatured1" style="--i: 1">
              <img src="~assets/img/fue.png" width="300px" alt="" />
            </v-col>
            <v-col class="imagefeatured2" style="--i: 1">
              <img src="~assets/img/fue2.png" width="300px" alt="" />
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: null,
      items: [
        {
          title: "#รวมรีวิว SNP PREP",
          des: "สกิลแคร์สุดฮิตจาก Twitter",
          src: require("@/assets/img/review.png"),
        },
        {
          title: "#รวมรีวิว SNP PREP",
          des: "สกิลแคร์สุดฮิตจาก Twitter",
          src: require("@/assets/img/review.png"),
        },
        {
          title: "#รวมรีวิว SNP PREP",
          des: "สกิลแคร์สุดฮิตจาก Twitter",
          src: require("@/assets/img/review.png"),
        },
      ],
    };
  },
};
</script>
<style>
#featured-start {
  text-align: center;
  font-style: italic;
  font-family: "PT Serif", serif !important;
  color: #ffffcc;
  font-size: 130px;
}
#featured img {
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
}

#featured .imagefeatured1 {
  position: absolute;
  /* top: 0; */
  left: 0;
  transition: 0.2s;
}
#featured .imagefeatured2 img {
  transition: 0.2s;
  /* left: 38px; */
}
#featured .imagefeatured1,
.imagefeatured2 {
  display: flex;
  justify-content: center;
}
#featured .imagefeatured1{
    z-index: 10;
}
#featured:hover .imagefeatured2 img {
  transition: 0.2s;
  transform: scale(1) translateX(calc(70px * var(--i)));
}
/* #featured .imagefeatured1 {
  max-width: 300px;
} */
@media screen and (max-width: 540px) {
  #featured-start {
    text-align: left;
    font-size: 50px;
  }
}
</style>