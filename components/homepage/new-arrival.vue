<template>
  <div>
    <v-col style="background:#C3D5F5;padding:0">
      <v-container>
        <h2 id="newarrival">New Arrival</h2>
        <v-slide-group
          v-model="model"
          show-arrows
          prev-icon="< PREV"
          next-icon="NEXT >"
          style="padding:0;"
        >
          <template v-slot:prev>
            <v-btn id="btn-prev"><v-icon>mdi-chevron-left</v-icon>PREV</v-btn>
          </template>
          <template v-slot:next>
            <v-btn id="btn-next">NEXT <v-icon>mdi-chevron-right</v-icon></v-btn>
          </template>
          <v-slide-item v-for="(item, i) in items" :key="i">
            <v-card id="card-newarrival">
              <v-img :src="item.src"></v-img>
              <v-divider color="#7789c5"></v-divider>
              <v-col>
                <v-container>
                  <v-row>
                    <h2>{{ item.title }}</h2>
                    <div
                      style="display:flex;justify-content:center;align-items:center;"
                    >
                      <h5>
                        NEW
                      </h5>
                    </div>
                    <v-col cols="12" class="pa-0">
                      <span>{{ item.des }}</span>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="8" class="pa-0">
                          <strong>{{ item.price }}.-</strong>
                        </v-col>
                        <v-col cols="4" class="pa-0 d-flex justify-end" id="icon-newarrival">
                          <v-icon color="#7789c5">
                            mdi-heart-outline</v-icon
                          >
                          <v-icon color="#7789c5"
                            >mdi-cart-outline
                          </v-icon>
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
#newarrival {
  text-align: center;
  font-style: italic;
  font-family: "PT Serif", serif !important;
  color: #ffffcc;
  font-size: 130px;
}
.v-slide-group {
  height: 500px;
}
.v-slide-group__next,
.v-slide-group__prev {
  position: absolute;
  z-index: 10;
  width: 100px;
  top: 40%;
  padding: 6px;
  font-style: normal !important;
}
.v-slide-group__prev {
  left: 0;
}
.v-slide-group__next {
  right: 0;
}
#card-newarrival {
  width: 275px;
  height: 470px;
  margin: 0 10px 0 10px;
  border-radius: 0 0 20px 20px;
  border: 1px solid #7789c5;
}
#card-newarrival .v-image__image {
  height: 350px;
}
#card-newarrival h2 {
  color: #7789c5;
}
#card-newarrival h5 {
  margin-top: 0px;
  margin-left: 5px;
  background: #ff91c4;
  padding: 2px 2px 0 2px;
  color: #fff;
  font-style: italic;
}
#card-newarrival strong {
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  color: #ff5065;
}
#card-newarrival span {
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
#icon-newarrival i{
  font-size:36px;
}
@media screen and (max-width: 1024px) {
  .v-slide-group__prev {
    margin-left: 15px;
  }
  .v-slide-group__next {
    margin-right: 15px;
  }
}
@media screen and (max-width: 540px) {
  #icon-newarrival i{
  font-size:18px;
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
  .v-slide-group__prev {
    left: 0px;
    margin: 0;
  }
  .v-slide-group__next {
    right: 0px;
    margin: 0;
  }
  #card-newarrival h2 {
    font-size: 16px;
  }
  #card-newarrival h5 {
    font-size: 10px;
    margin-left: 2px;
    padding: 0;
  }
  #card-newarrival span {
    font-size: 8px;
  }
  #card-newarrival strong {
    font-weight: 400;
    font-size: 16px;
  }
  #newarrival {
    text-align: center;
    font-style: italic;
    font-family: "PT Serif", serif !important;
    color: #ffffcc;
    font-size: 60px;
  }
  #card-newarrival {
    width: 185px;
    height: 320px;
    margin: 0 5px 0 5px;
  }
  .v-slide-group {
    height: 340px;
  }
  #card-newarrival .v-image__image {
    height: 250px;
  }
}
@media screen and (max-width: 430px) {
  .v-slide-group__prev {
    left: 0px;
    margin: 0;
  }
  .v-slide-group__next {
    margin: 0;
  }
}
</style>
