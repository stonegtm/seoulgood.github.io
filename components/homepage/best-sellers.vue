<template>
  <div>
    <v-col style="background:#7789c5;padding:0">
      <v-container>
        <h2 id="bestsellers">Best Sellers</h2>
        <v-col class="pa-0" style="display:flex;justify-content:center;">
          <v-slide-group v-model="model" show-arrows id="slide-bestsellers">
            <template v-slot:prev>
              <v-btn id="btn-prev"><v-icon>mdi-chevron-left</v-icon>PREV</v-btn>
            </template>
            <template v-slot:next>
              <v-btn id="btn-next"
                >NEXT <v-icon>mdi-chevron-right</v-icon></v-btn
              >
            </template>
            <v-slide-item v-for="(item, i) in items" :key="i">
              <v-card id="card-bestsellers">
                <v-img :src="item.src"></v-img>
                <v-col style="background:rgba(255,186,219);">
                  <v-container>
                    <v-row>
                      <h2>{{ item.title }}</h2>
                      <div
                        style="display:flex;justify-content:center;align-items:center;"
                      ></div>
                      <v-col cols="12" class="pa-0">
                        <span>{{ item.des }}</span>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="8" class="pa-0">
                            <strong>{{ item.price }}.-</strong>
                          </v-col>
                          <v-col cols="4" class="pa-0 d-flex justify-end" id="icon-bestseller">
                            <v-icon color="#7789c5">
                              mdi-heart-outline</v-icon
                            >
                            <v-icon color="#7789c5">mdi-cart-outline </v-icon>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-card-text> </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
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
          title: "YUSE",
          des: "PRINTED TUBE TOP",
          price: 1390,
          src: require("@/assets/img/bag.png")
        },
        {
          title: "YUSE2",
          des: "PRINTED TUBE TOP",
          price: 139000,
          src: require("@/assets/img/bag.png")
        },
        {
          title: "YUSE3",
          des: "PRINTED TUBE TOP",
          price: 139000,
          src: require("@/assets/img/bag.png")
        },
        {
          title: "YUSE4",
          des: "PRINTED TUBE TOP",
          price: 1390000,
          src: require("@/assets/img/bag.png")
        },
        {
          title: "YUSE5",
          des: "PRINTED TUBE TOP",
          price: 1390000,
          src: require("@/assets/img/bag.png")
        }
      ]
    };
  }
};
</script>
<style>
#icon-bestseller{
  font-size: 36px;
}
#slide-bestsellers {
  padding: 0;
  max-width: 880px;
}
#bestsellers {
  text-align: center;
  font-style: italic;
  font-family: "PT Serif", serif !important;
  color: #fff;
  font-size: 130px;
}
.v-slide-group {
  height: 500px;
}
#slide-bestsellers .v-slide-group__next,
#slide-bestsellers .v-slide-group__prev {
  position: absolute;
  z-index: 10;
  width: 100px;
  top: 40%;
  padding: 6px;
  font-style: normal !important;
}
#slide-bestsellers .v-slide-group__prev {
  margin-left: -90px;
}
#slide-bestsellers .v-slide-group__next {
  margin-right: -90px;
}
#card-bestsellers {
  width: 275px;
  height: 470px;
  margin: 0 10px 0 10px;
  border: 1px solid #7789c5;
}
#card-bestsellers .v-image__image {
  height: 350px;
}
#card-bestsellers h2 {
  color: #7789c5;
}
#card-bestsellers strong {
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  color: #ff5065;
}
#card-bestsellers span {
  color: #7789c5;
}
#btn-prev {
  background: rgba(255, 145, 196, 0.8);
  border-radius: 0;
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  padding: 3px 8px 3px 0;
}
#btn-next {
  background: rgba(255, 145, 196, 0.8);
  border-radius: 0;
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  padding: 3px 0 3px 8px;
}
#btn-prev i.v-icon {
  font-size: 48px;
}
#btn-next i.v-icon {
  font-size: 48px;
}
@media screen and (max-width: 1024px) {
  #slide-bestsellers .v-slide-group__prev {
    margin-left: 0;
  }
  #slide-bestsellers .v-slide-group__next {
    margin-right: 0;
  }
}

@media screen and (max-width: 540px) {
  #icon-bestseller{
  font-size: 18px;
}
  #slide-bestsellers {
    padding: 0;
    max-width: 100%;
  }
  #btn-prev {
    width: 90px;
    background: rgba(255, 145, 196, 0.8);
    border-radius: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    padding: 3px 8px 3px 0;
  }
  #btn-next {
    width: 90px;
    background: rgba(255, 145, 196, 0.8);
    border-radius: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    padding: 3px 0 3px 8px;
  }
  #btn-prev i.v-icon {
    font-size: 24px;
  }
  #btn-next i.v-icon {
    font-size: 24px;
  }
  #slide-bestsellers .v-slide-group__prev {
    margin-left: 0;
  }
  #slide-bestsellers .v-slide-group__next {
    margin-right: 0;
  }
  #card-bestsellers h2 {
    font-size: 16px;
  }
  #card-bestsellers span {
    font-size: 8px;
  }
  #card-bestsellers strong {
    font-weight: 400;
    font-size: 16px;
  }
  #bestsellers {
    text-align: center;
    font-style: italic;
    font-family: "PT Serif", serif !important;
    color: #fff;
    font-size: 60px;
  }
  #card-bestsellers {
    width: 185px;
    height: 320px;
    margin: 0 5px 0 5px;
  }
  .v-slide-group {
    height: 340px;
  }
  #card-bestsellers .v-image__image {
    height: 250px;
  }
}
</style>
