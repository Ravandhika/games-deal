<template>
  <section>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__big__item">{{ slide }}</div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      :autoplay="5000"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
      </Slide>
    </Carousel>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const currentSlide = ref(0);

const slideTo = (val: number) => {
  currentSlide.value = val;
};
</script>

<style scoped>
.carousel__big__item {
  min-height: 260px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  @apply w-full bg-brand-green-1 text-xl text-brand-white-1;
}
.carousel__item {
  min-height: 180px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  @apply w-full bg-brand-green-1 text-xl text-brand-white-1;
}

.carousel__slide {
  padding: 10px 10px 10px 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
