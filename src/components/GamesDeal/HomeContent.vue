<template>
  <main class="z-20 flex h-screen flex-col">
    <section class="py-16 px-32">
      <home-carousel />
    </section>
    <section class="py-16 px-32">
      <h1 class="text-3xl font-bold">Check this out, Today Deals are !!!</h1>
    </section>
    <section class="py-16 px-32">
      <div class="grid grid-cols-2 justify-items-center gap-4 text-center">
        <div class="h-full w-full">
          <div class="grid-col-2 grid">
            <div class="h-full w-full bg-blue-800 p-4">
              <h1>Steam</h1>
            </div>
            <div class="h-full w-full bg-red-800 p-4">
              <ul>
                <li class="">7 Days to Die</li>
                <li class="">A Plague Tale: Innocence</li>
                <li class="">Academia: School Simulator</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="h-full w-full bg-green-500 p-10">
          <h1>Green Gamings</h1>
        </div>
        <div class="h-full w-full bg-orange-600 p-10">
          <h1>EA</h1>
        </div>
        <div class="h-full w-full bg-violet-700 p-10">
          <h1>GOG</h1>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import homeCarousel from "@/components/GamesDeal/HomeCarousel.vue";
</script>
