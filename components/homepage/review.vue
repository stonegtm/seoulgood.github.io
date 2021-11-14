<template>
  <div>
    <v-col id="review-section" style="background: #7789c5">
      <v-container>
        <h2 id="review-start">Review</h2>
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            id="review"
            cols="12"
            lg="4"
          >
            <v-col class="image">
              <v-img :src="item.src" width="100%" height="250"></v-img>
            </v-col>
            <v-col class="review-footer">
              <h2 class="into">REVIEW</h2>
              <v-col class="title">
                <h2>{{ item.title }}</h2>
                <h3>{{ item.des }}</h3>
              </v-col>
              <v-col style="padding-top: 0">
                <h4 style="float: right; font-size: 24px; color: #fff">
                  41 Lovers
                  <v-icon color="#fff" class="mdi-36px" style="float: right"
                    >mdi-heart-outline</v-icon
                  >
                </h4>
              </v-col>
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
#review-start {
  text-align: center;
  font-style: italic;
  font-family: "PT Serif", serif !important;
  color: #fff;
  font-size: 130px;
}
@media screen and (max-width: 540px) {
  #review-start {
    text-align: center;
    font-style: italic;
    font-family: "PT Serif", serif !important;
    color: #fff;
    font-size: 60px;
  }
}
#review .review-footer {
  width: 100%;
  height: 210px;
  background: #c3d5f5;
  padding-left: 0;
  position: relative;
  z-index: 10;
}
#review .review-footer .into {
  color: #ffffcc;
  background: #ff91c4;
  max-width: 120px;
  text-align: right;
  padding-right: 10px;
  margin-top: 5px;
}
#review .review-footer .title {
  /* padding:0; */
  text-align: center;
}
#review .review-footer .title h2 {
  margin-bottom: 5px;
  font-size: 2vw;
  color: #7789c5;
}
#review .review-footer .title h3 {
  margin-top: 10px;
  font-size: 1.5vw;
  color: #fff;
}
#review .image {
  padding: 0;
  position: relative;
  z-index: 10;
}
#review {
  margin-bottom: 100px;
}
</style>