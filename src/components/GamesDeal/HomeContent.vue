<template>
  <div class="greetings">
    <h1 class="text-xl font-bold text-green-600">{{ projectName }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const projectName = ref("This is Home Page Contents");
</script>
