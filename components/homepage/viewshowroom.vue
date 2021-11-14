<template>
  <div>
    <v-col style="background: #7789c5; padding: 0">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" id="showroomLeft">
            <v-row class="all-text">
              <v-col class="top">
                <h4 style="margin-left: 20px">View</h4>
              </v-col>
              <v-col class="bottom">
                <h4 style="border-bottom: 1px solid #ffffcc">Showroom</h4>
              </v-col>
              <v-col class="last">
                <h5>@Sukumvit49</h5>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6" id="showroomRight">
            <v-img
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              max-width="100%"
            ></v-img>
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
          src: require("@/assets/img/showroom1.png"),
        },
        {
          src: require("@/assets/img/showroom2.png"),
        },
      ],
    };
  },
};
</script>

<style>
#showroomLeft {
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#showroomLeft h4 {
  font-size: 120px;
  color: #ffffcc;
  font-style: italic;
  font-family: "PT Serif", serif !important;
}
#showroomLeft .last h5 {
  font-size: 40px;
  text-align: center;
  color: #fff;
}
#showroomLeft .last {
  margin-top: -20px;
  z-index: 10;
}
#showroomLeft .bottom {
  margin-top: -100px;
  z-index: 10;
}
#showroomLeft .top,
.bottom,
.last {
  margin-left: 120px;
}
#showroomRight {
  padding: 0;
}
@media screen and (max-width: 540px) {
  #showroomLeft h4 {
    font-size: 60px;
    color: #ffffcc;
    font-style: italic;
    font-family: "PT Serif", serif !important;
  }
  #showroomLeft .last h5 {
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
  #showroomLeft .bottom {
    margin-top: -60px;
    z-index: 10;
  }
  #showroomLeft .top,
  .bottom,
  .last {
    margin-left: 0px;
  }
  #showroomLeft .all-text {
    margin-bottom: -110px;
  }
}
</style>