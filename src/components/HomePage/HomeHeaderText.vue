<template>
  <section class="flex flex-col items-center">
    <h1
      class="animate-fadeInOut break-normal text-left text-8xl font-bold tracking-tighter dark:text-brand-white-1"
    >
      <span>{{ action }}</span>
    </h1>
    <button>testr</button>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import nextElementInList from "@/utils/nextElementList";

const action = ref("Discover the wonder world of video games");
const interval = ref<ReturnType<typeof setInterval>>();

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = [
      "Discover the wonder world of video games",
      "Thousands of games are waiting for you",
      "Find the best deals & saves more Money"
    ];
    action.value = nextElementInList(actions, action.value);
  }, 5000);
};

onMounted(changeTitle);
onBeforeUnmount(() => clearInterval(interval.value));
</script>
