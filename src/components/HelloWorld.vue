<template>
  <div class="greetings">
    <h1 class="text-4xl font-bold text-green-600">{{ projectName }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const projectName = ref('boilerplate')
</script>
