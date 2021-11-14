<template>
  <div>
    <v-col class="mb-10">
      <v-container>
        <v-row style="margin-top:50px;">
          <v-col>
            <v-hover v-slot="{ hover }" open-delay="200">
              <div
                id="toggle"
                :class="{ 'on-hover': hover }"
                :style="`height:${height}px;position:fixed`"
                @mouseleave="height = 50"
              >
                <div
                  id="version-pc"
                  style="position:absolute;height:50px;width:50px;margin-top:-20px;"
                  @mouseover="height = 620"
                ></div>
                <v-col class="menu">
                  <v-col style="margin-top:20px;">
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">Home</nuxtLink>
                    </v-col>
                    <v-hover v-slot="{ hover }">
                      <v-col
                        cols="12"
                        id="category"
                        :class="{ hovercategory: hover }"
                      >
                        <v-row>
                          <v-col cols="8">
                            <nuxtLink to="/" id="text-color">Category</nuxtLink>
                            <v-divider class="border"></v-divider>
                          </v-col>
                          <v-col cols="4" class="subcategory">
                            <v-col v-for="(item, i) in category" :key="i">
                              <nuxtLink
                                id="text-color-subcategory"
                                to="/category/skincare"
                                class="text-color"
                                >{{ item }}</nuxtLink
                              >
                            </v-col>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-hover>
                    <v-hover v-slot="{ hover }">
                      <v-col
                        cols="12"
                        id="brand"
                        :class="{ hovercategory: hover }"
                        @mouseover="height = 830"
                        @mouseleave="height = 620"
                      >
                        <v-row>
                          <v-col cols="6">
                            <span>
                              <nuxtLink to="/" id="text-color">Brand</nuxtLink>
                            </span>
                            <v-divider class="border"></v-divider>
                          </v-col>
                          <v-col cols="6" class="subcategory">
                            <v-col
                              v-for="(item, i) in brand"
                              :key="i"
                              class=" pb-0 pt-2"
                            >
                              <nuxtLink
                                id="text-color-brand-subcategory"
                                to="/category/skincare"
                                class="text-color"
                                >{{ item }}</nuxtLink
                              >
                            </v-col>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-hover>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">New Arrival</nuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">BestSellers</nuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">Promotion</nuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color"
                        >Seuolgoods Pick</nuxtLink
                      >
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">Review</nuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">About</nuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <nuxtLink to="/" class="text-color">Store</nuxtLink>
                    </v-col>
                  </v-col>
                </v-col>
              </div>
            </v-hover>
          </v-col>
          <v-col style="display:flex;justify-content:center">
            <div style="position:fixed;z-index:1000;margin-top:-57px;">
              <img style="max-width:140px;" src="~assets/img/logo.png" />
            </div>
          </v-col>

          <v-col style="display:flex;justify-content:flex-end;">
            <div id="search">
              <v-text-field
                label="Search"
                append-icon="mdi-magnify"
                @click:append="toggleMarker()"
                style="margin-top:-14px"
              ></v-text-field>
            </div>
            <v-hover v-slot="{ hover }">
              <div id="account" :class="{ hoveraccount: hover }" open-delay="0">
                <v-icon class="mdi-36px iconaccount">
                  mdi-account-outline
                </v-icon>
                <div style="display:flex;justify-content:flex-end;">
                  <div class="accounting">
                    <div style="float:right;margin:50px 20px 5px 0;">
                      <h2 style="font-weight:400;color:#7789C5">
                        My Account
                      </h2>
                    </div>
                    <v-divider
                      color="#7789C5"
                      style="margin:90px 20px 0 20px;"
                    ></v-divider>
                    <v-col
                      style="display:flex;justify-content:center;margin-top:20px;"
                    >
                      <img src="~assets/img/account.png" width="100px" alt="" />
                    </v-col>
                    <v-col>
                      <Login />
                    </v-col>
                  </div>
                </div>
              </div>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <div id="cart" :class="{ hovercart: hover }">
                <v-btn icon
                  ><v-icon class="mdi-36px icon1"
                    >mdi-cart-outline</v-icon
                  ></v-btn
                >
                <div style="display:flex;justify-content:flex-end;">
                  <div class="shippingbag">
                    <div style="float:right;margin:50px 20px 5px 0;">
                      <h2 style="font-weight:400;color:#7789C5">
                        Shipping Bag
                      </h2>
                    </div>
                    <v-divider
                      color="#7789C5"
                      style="margin:90px 20px 0 20px;"
                    ></v-divider>
                    <!-- <div style="margin:7px 20px 0 20px"> -->
                    <v-col cols="12"></v-col>
                    <v-col id="order">
                      <v-row class="ml-2 mr-3">
                        <v-col cols="5">
                          <img
                            style="width:100%;border-radius:10px;"
                            src="~assets/img/cream.png"
                        /></v-col>
                        <v-col cols="7">
                          <h3 style="color:#7789C5">Needly</h3>
                          <p style="font-size:0.8em;">
                            Mild Cleansing Gel 235 ML.
                          </p>
                          <h4
                            style="margin-top:-15px;font-style: italic;color:#FF5065"
                          >
                            490.-
                          </h4>
                          <span
                            ><span
                              ><v-icon color="#FF5065" class="mdi-17px"
                                >mdi-plus</v-icon
                              ><span
                                style="font-size:16px;font-style: italic;color:#FF5065"
                                >10</span
                              ><span
                                ><v-icon color="#FF5065" class="mdi-17px"
                                  >mdi-minus</v-icon
                                ></span
                              ></span
                            >
                          </span>
                        </v-col>
                      </v-row>
                      <v-row class="ml-2 mr-3">
                        <v-col cols="5">
                          <img
                            style="width:100%;border-radius:10px;"
                            src="~assets/img/cream.png"
                        /></v-col>
                        <v-col cols="7">
                          <h3 style="color:#7789C5">Needly</h3>
                          <p style="font-size:0.8em;">
                            Mild Cleansing Gel 235 ML.
                          </p>
                          <h4
                            style="margin-top:-15px;font-style: italic;color:#FF5065"
                          >
                            490.-
                          </h4>
                          <span
                            ><span
                              ><v-icon color="#FF5065" class="mdi-17px"
                                >mdi-plus</v-icon
                              ><span
                                style="font-size:16px;font-style: italic;color:#FF5065"
                                >10</span
                              ><span
                                ><v-icon color="#FF5065" class="mdi-17px"
                                  >mdi-minus</v-icon
                                ></span
                              ></span
                            >
                          </span>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-row class="pt-0 ml-2 mr-2">
                      <v-col cols="6" class="pt-2 ">
                        <strong
                          style="font-size:1.5em;font-weight:400;color:#7789C5"
                          >Cart Totals</strong
                        >
                      </v-col>
                      <v-col cols="6" class="pt-2">
                        <div style="float:right;margin-top:-10px;">
                          <strong
                            style="font-size:2em;font-style: italic;color:#FF5065;font-weight:400;"
                            >980.-</strong
                          >
                        </div></v-col
                      >
                    </v-row>
                    <v-divider color="#7789C5" class="ml-4 mr-4"></v-divider>
                    <v-col>
                      <v-btn id="btn-checkout" elevation="0">Checkout</v-btn>
                    </v-col>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </v-hover>
            <div id="favorite">
              <v-btn icon to="/favorite">
                <v-icon class="mdi-36px" style="color:rgba(119, 137, 197, 0.8);"
                  >mdi-heart-outline
                </v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col style="position:fixed"> </v-col>
        </v-row>
      </v-container>
      <v-col
        cols="12"
        class="pa-0"
        style="position:fixed;left:0;display:flex;justify-content:center;margin-top:35px;z-index:80"
      >
        <v-divider
          color="#7789C5"
          style="max-width:1200px;width:100%;"
        ></v-divider>
      </v-col>
    </v-col>
  </div>
</template>
<script>
import Login from "@/components/login";
export default {
  components: {
    Login
  },
  data() {
    return {
      menuVersionMobile: false,
      height: 50,
      width: 50,
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" }
      ],
      category: ["Skincare", "Makeup", "Masks", "Bath&Body", "Hair"],
      brand: [
        "1COSRX",
        "2Dr.Jart",
        "3COSRX",
        "4Dr.Jart",
        "5COSRX",
        "6Dr.Jartdsadasdsada",
        "6COSRX",
        "7Dr.Jart",
        "8COSRX",
        "9Dr.Jart",
        "10COSRX",
        "11Dr.Jart",
        "1COSRX",
        "2Dr.Jart",
        "3COSRX",
        "4Dr.Jart",
        "5COSRX",
        "6Dr.Jartdsadasdsada",
        "6COSRX",
        "7Dr.Jart",
        "8COSRX",
        "9Dr.Jart",
        "10COSRX",
        "11Dr.Jart"
      ]
    };
  },
  mounted() {},
  methods: {
    showMenu() {
      console.log((this.menuVersionMobile = !this.menuVersionMobile));
      if (this.menuVersionMobile) {
        this.height = 620;
      } else {
        this.height = 50;
        this.width = 50;
      }
    },
    toggleMarker() {
      console.log("test");
    }
  }
};
</script>
<style>
.container {
  max-width: 1200px;
}

#toggle {
  position: absolute;
  z-index: 100;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
  display: flex;
  width: 50px;
}

#toggle.on-hover {
  width: 450px;
}
@media (max-width: 414px) {
  #toggle.on-hover {
    width: 370px;
  }
  /* #version-pc {
    display: none;
  } */
}

#toggle::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 2px;
  background: #7789c5;
  transform: translateY(-10px);
  box-shadow: 0 10px 0 #7789c5;
  transition: 0.2s;
}
#toggle::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 2px;
  background: #7789c5;
  transform: translateY(10px);
  transition: 0.2s;
}
#toggle.on-hover::before {
  transform: translateY(0px) rotate(45deg);
  background: #fff;
  z-index: 100;
  box-shadow: 0 0 0 #7789c5;
  transition: 0.2s;
}
#toggle.on-hover::after {
  transform: translateY(0px) rotate(-45deg);
  background: #fff;
  transition: 0.2s;
}
#toggle.on-hover .menu {
  /* display: block; */
  visibility: visible;
  transition: 0.2s;
  background: rgba(119, 137, 197, 0.85);
  margin-top: -20px;
  margin-left: -10px;
  /* position: absolute; */
}
#toggle .menu {
  /* display: none; */
  visibility: hidden;
  /* transition: 0.2s; */
}
.nuxt-link-active.text-color {
  color: #fff;
  transition: 0.3s;
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 300;
}
.nuxt-link-active.text-color:hover {
  transition: 0.3s;
  color: #ffbadb;
}
#text-color {
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  font-size: 1.3em;
  transition: 0.3s;
}
#category .border {
  visibility: hidden;
  background: #ffbadb;
  width: 190px;
}
#category.hovercategory #text-color {
  transition: 0.3s;
  color: #ffbadb;
}
#category.hovercategory .border {
  visibility: visible;
}
#category .subcategory {
  position: absolute;
  right: 100px;
  visibility: hidden;
}

#category.hovercategory .subcategory {
  visibility: visible;
}
#brand.hovercategory .subcategory {
  --height-category: 800px !important;
  visibility: visible;
}
#brand .border {
  visibility: hidden;
  width: 190px;
  background: #ffbadb;
}
#brand.hovercategory #text-color {
  transition: 0.3s;
  color: #ffbadb;
}
#brand.hovercategory .border {
  visibility: visible;
}
#brand .subcategory {
  position: absolute;
  height: 650px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  right: 10px;
  visibility: hidden;
}
#brand .subcategory::-webkit-scrollbar {
  width: 10px;
  height: 50px;
}
#brand .subcategory::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
#brand .subcategory::-webkit-scrollbar-thumb {
  background: rgba(119, 137, 197);
  border-radius: 5px;
}
#brand.hovercategory .subcategory {
  visibility: visible;
}

#text-color-subcategory {
  text-decoration: none;
  font-size: 1.3em;
  color: #fff;
  font-weight: 300;
}
#text-color-subcategory:hover {
  transition: 0.2s;
  color: #ffbadb;
}
#text-color-brand-subcategory {
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 300;
  color: #fff;
}
#text-color-brand-subcategory:hover {
  transition: 0.2s;
  color: #ffbadb;
}
#cart {
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row-reverse;
  max-width: 50px;
  margin-right: 30px;
}
#cart.hovercart {
  max-width: 50px;
}
#cart.hovercart .shippingbag {
  visibility: visible;
  transition: 0.3s;
}
#cart .icon1 {
  color: rgba(119, 137, 197, 0.8);
  z-index: 0;
}
#cart.hovercart .icon1 {
  color: rgba(119, 137, 197);
  z-index: 10;
}

#cart .shippingbag {
  visibility: hidden;
  position: absolute;
  width: 370px;
  height: 500px;
  background: rgba(195, 213, 245, 0.8);
  margin: -5px -80px 0 0;
}
#order {
  padding: 0;
  height: 280px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#order::-webkit-scrollbar {
  width: 10px;
  height: 50px;
}
#order::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
#order::-webkit-scrollbar-thumb {
  background: rgba(119, 137, 197);
  border-radius: 5px;
}

#btn-checkout {
  border-radius: 0;
  float: right;
  height: 30px;
  text-transform: capitalize;
  background: #7789c5;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

/** Account CSS */
#account {
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row-reverse;
  max-width: 50px;
  margin-right: 80px;
}
#account.hoveraccount {
  max-width: 50px;
}
#account.hoveraccount .accounting {
  visibility: visible;
  z-index: 8;
}
#account .accounting {
  visibility: hidden;
  position: absolute;
  width: 370px;
  height: 530px;
  margin: -5px -130px 0 0;
  background: rgba(195, 213, 245, 0.8);
}
#account .iconaccount {
  color: rgba(119, 137, 197, 0.8);
  z-index: 0;
}
#account.hoveraccount .iconaccount {
  color: rgba(119, 137, 197);
  z-index: 10;
}
#favorite {
  position: fixed;
  margin-right: -15px;
  z-index: 10;
}
#search {
  position: fixed;
  z-index:80;
  margin-right: 130px;
}
#search label {
  left: 40% !important;
  color: #7789c5;
}
#search .v-input__slot:before {
  border-color: #7789c5 !important;
}
#search .v-input__icon button {
  color: #7789c5 !important;
}
</style>
