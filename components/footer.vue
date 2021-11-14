<template>
  <div>
    <v-col id="footer-section" style="background: #c3d5f5">
      <v-container>
        <h4 id="text-start-service">Customer Service</h4>
        <v-row>
          <v-col cols="6" class="one">
            <v-row>
              <v-col cols="12" lg="4">
                <h4>About Seoulgoods</h4>
                <h5><nuxt-link to="brand-story">Brand Story</nuxt-link></h5>
                <h5><nuxt-link to="brand-story">Store</nuxt-link></h5>
              </v-col>
              <v-col cols="12" lg="4">
                <h4>My Account</h4>
                <h5><nuxt-link to="brand-story">Track Orders</nuxt-link></h5>
                <h5><nuxt-link to="brand-story">Wish List</nuxt-link></h5>
              </v-col>
              <v-col cols="12" lg="4">
                <h4>Help</h4>
                <h5><nuxt-link to="brand-story">CS Center</nuxt-link></h5>
                <h5><nuxt-link to="brand-story">FAQ</nuxt-link></h5>
                <h5><nuxt-link to="brand-story">Wholesale</nuxt-link></h5>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="two">
            <v-row>
              <v-col cols="12" lg="6">
                <h4>Seoulgoods Address</h4>
              </v-col>
              <v-col cols="12" lg="6">
                <v-row>
                  <!-- <v-col cols="5" class="pa-0">
                    <h5> <img src="~assets/img/social/ig.png" width="20px" style="margin-top:10px;" alt=""> IG</h5>
                    <h5><v-icon color="#7789c5">mdi-facebook</v-icon>FB</h5>
                    <h5><v-icon color="#7789c5">mdi-instagram</v-icon>LINE</h5>
                    <h5>
                      <v-icon color="#7789c5">mdi-instagram</v-icon>Shopee
                    </h5>
                    <h5>
                      <v-icon color="#7789c5">mdi-instagram</v-icon>Twitter
                    </h5>
                    <h5>
                      <v-icon color="#7789c5">mdi-instagram</v-icon>TIKTOK
                    </h5>
                  </v-col> -->
                  <v-col cols="12" class="pl-0 pr-0">
                    <v-row>
                      <v-col class="pa-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/ig.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">IG</h5>
                          </v-col>
                          <v-col class="pl-0 pr-0" cols="8"
                            ><h5>@seoulgoods.official</h5></v-col
                          >
                        </v-row>
                      </v-col>
                      <v-col class="pl-0 pr-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/fb.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">FB</h5>
                          </v-col>
                          <v-col class="pa-0" cols="8"
                            ><h5>Seoulgoods</h5></v-col
                          >
                        </v-row>
                      </v-col>
                      <v-col class="pl-0 pr-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/line.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">LINE</h5>
                          </v-col>
                          <v-col class="pa-0" cols="8"
                            ><h5>@seoulgoods</h5></v-col
                          >
                        </v-row>
                      </v-col>
                      <v-col class="pl-0 pr-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/shopee.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">Shopee</h5>
                          </v-col>
                          <v-col class="pa-0" cols="8"
                            ><h5>seoulgoods.official</h5></v-col
                          >
                        </v-row>
                      </v-col>
                      <v-col class="pl-0 pr-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/twitter.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">Twitter</h5>
                          </v-col>
                          <v-col class="pa-0" cols="8"
                            ><h5>@seoulgoods.th</h5></v-col
                          >
                        </v-row>
                      </v-col>
                      <v-col class="pl-0 pr-0" cols="12">
                        <v-row>
                          <v-col
                            class="pa-0"
                            cols="4"
                            style="display: flex; align-items: center"
                          >
                            <img
                              src="~assets/img/social/tiktok.png"
                              width="20px"
                              alt=""
                            />
                            <h5 class="ml-2">TIKTOK</h5>
                          </v-col>
                          <v-col class="pa-0" cols="8">
                            <h5>seoulgoods</h5>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </div>
</template>
<style>
#text-start-service {
  color: #7789c5;
  font-size: 100px;
  font-style: italic;
  font-family: "PT Serif", serif !important;
}
#footer-section .one,
.two,
.three {
  padding: 0;
}
#footer-section .one,
.two,
a {
  text-decoration: none;
}
#footer-section .one h4,
h5 {
  color: #7789c5;
  font-size: 20px;
}
#footer-section .two h4,
h5 {
  color: #7789c5;
  font-size: 20px;
}
#footer-section h5 a {
  color: #fff;
}
@media screen and (max-width: 540px) {
  #text-start-service {
    font-size: 60px;
  }
  #footer-section .one h4,
  h5 {
    font-size: 14px;
  }
  #footer-section .two h4 {
    font-size: 14px;
  }
  #footer-section .two h5 {
    font-size: 12px;
  }
}
</style>