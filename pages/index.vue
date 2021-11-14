<template>
  <div>
    <Carousel />
    <Newarrival />
    <NewarrivalOver />
    <BestSeller />
    <Review />
    <Featured />
    <Viewshowroom />
  </div>
</template>
<script>
import Carousel from "@/components/homepage/carousel";
import Newarrival from "@/components/homepage/new-arrival";
import NewarrivalOver from "@/components/homepage/new-arrival-over";
import BestSeller from "@/components/homepage/best-sellers";
import Review from "@/components/homepage/review";
import Viewshowroom from "@/components/homepage/viewshowroom";
import Featured from "@/components/homepage/featured-brand";

export default {
  components: {
    Carousel,
    Newarrival,
    BestSeller,
    NewarrivalOver,
    Review,
    Featured,
    Viewshowroom,
  },
  data() {
    return {};
  },
};
</script>
