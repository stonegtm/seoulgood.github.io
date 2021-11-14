<template>
  <div>
    <v-col style="background:#C3D5F5;padding:0">
      <v-container>
        <h2 id="newarrival-over">
          New Arrival
          <span style="font-size:20px;"
            ><v-icon color="#7789c5">mdi-chevron-left</v-icon>
            <nuxt-link
              to="/viewall"
              style="color:#7789c5;text-decoration:none;"
            >
              VIEW ALL</nuxt-link
            ></span
          >
        </h2>
        <v-col id="overflow-new-arrival" cols="12">
          <v-row>
            <v-col id="new-arrival-over" v-for="(item, i) in items" :key="i">
              <v-col class="image" style="padding:0;">
                <v-img max-height="300" :src="item.src"></v-img>
              </v-col>
              <v-col class="footer-new-arrival">
                <v-container>
                  <v-row>
                    <h3>{{ item.title }}</h3>
                    <div
                      style="display:flex;justify-content:center;align-items:center;"
                    >
                      <h6>
                        NEW
                      </h6>
                      <!-- <div style="font-size:6px;background:red;padding:0 2px 0 2px;">NEW</div> -->
                    </div>
                    <v-col cols="12" class="pa-0">
                      <span>{{ item.des }}</span>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="8" class="pa-0">
                          <strong>{{ item.price }}.-</strong>
                        </v-col>
                        <v-col
                          cols="4"
                          class="pa-0 d-flex justify-end"
                          id="icon-newarrival-over"
                        >
                          <v-icon color="#7789c5"> mdi-heart-outline</v-icon>
                          <v-icon color="#7789c5">mdi-cart-outline </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-col>
          </v-row>
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
        },
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
        },
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
        },
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
        },
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
        },
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
#icon-newarrival-over i {
  font-size: 24px;
}
#newarrival-over {
  text-align: left;
  font-style: italic;
  font-family: "PT Serif", serif !important;
  color: #ffffcc;
  font-size: 70px;
}
#overflow-new-arrival {
  height: 820px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#overflow-new-arrival::-webkit-scrollbar {
  width: 10px;
  border: 3px solid transparent;
  background-clip: content-box;
}
#overflow-new-arrival::-webkit-scrollbar-track {
  background: #7789c5;
  border-radius: 5px;
  border: 4.5px solid transparent;
  background-clip: content-box;
}
#overflow-new-arrival::-webkit-scrollbar-thumb {
  background-color: #7789c5;
  border-radius: 9px;
  border-radius: 5px;
  background-clip: content-box;
}

#new-arrival-over {
  border: 1px solid #7789c5;
  padding: 0;
  margin: 10px 5px 20px 5px;
  max-width: 220px;
  height: 390px;
  border-radius: 0 0 20px 20px;
  transition: 0.2s;
}
#new-arrival-over .image {
  width: 100%;
}
#new-arrival-over:hover {
  box-shadow: 3px 5px 12px rgba(0, 0, 0, 0.5);
  transform: scale(1) translateY(-10px);
  position: initial;
  transition: 0.2s;
}
#new-arrival-over:hover h3 {
  color: #ff91c4;
}
#new-arrival-over .footer-new-arrival {
  padding: 14px 10px 0 10px;
}
#new-arrival-over h3 {
  color: #7789c5;
}
#new-arrival-over h6 {
  margin-top: 0px;
  margin-left: 5px;
  background: #ff91c4;
  padding: 2px 2px 0 2px;
  color: #fff;
  font-style: italic;
}
#new-arrival-over strong {
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  color: #ff5065;
}
#new-arrival-over span {
  color: #7789c5;
}
@media screen and (max-width: 540px) {
  #new-arrival-over .image {
    height: 140px;
  }
  #new-arrival-over .image .v-image__image {
    height: 140px;
  }
  #new-arrival-over .footer-new-arrival {
    padding: 5px;
  }
  #newarrival-over {
    text-align: left;
    font-style: italic;
    font-family: "PT Serif", serif !important;
    color: #ffffcc;
    font-size: 40px;
  }
  #newarrival-over a {
    font-size: 15px;
  }
  #newarrival-over i {
    font-size: 20px;
  }
  #new-arrival-over h3 {
    color: #7789c5;
    font-size: 3vmin;
  }
  #new-arrival-over h6 {
    /* display: none; */
    font-size: 2vmin;
    margin: 0 2.5px 0 2.5px;
    padding: 0 2px 0 2px;
    background: #ff91c4;
    color: #fff;
    font-style: italic;
  }
  #new-arrival-over strong {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    color: #ff5065;
  }
  #new-arrival-over span {
    color: #7789c5;
    font-size: 5px;
  }
  #icon-newarrival-over i {
    font-size: 16px;
    margin: 0 1px 0 1px;
  }
  #overflow-new-arrival {
    height: 600px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  #new-arrival-over {
    border: 1px solid #7789c5;
    padding: 0;
    margin: 5px 2.5px 5px 2.5px;
    max-width: 130px;
    min-width: 120px;
    height: 215px;
    max-height: 230px;
    border-radius: 0 0 10px 10px;
  }
}
</style>
