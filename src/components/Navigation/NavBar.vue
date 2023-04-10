<template>
  <header class="h-16 w-full">
    <div class="fixed top-0 left-0 z-40 h-16 w-full bg-brand-black-1">
      <div class="mx-auto flex h-full flex-nowrap px-32">
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-2xl font-bold text-brand-green-1"
        >
          Games Deal
        </router-link>
        <nav class="mx-auto h-full">
          <ul class="flex h-full list-none">
            <li
              role="listitem"
              v-for="navbarItem in navbarItems"
              :key="navbarItem.text"
              class="ml-12 h-full text-lg font-bold text-brand-white-1 first:ml-0"
            >
              <router-link :to="navbarItem.url" class="flex h-full items-center">
                {{ navbarItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex h-full items-center">
          <button role="button" @click="toggleDark()">
            <font-awesome-icon
              :icon="isDark ? ['fa', 'sun'] : ['fa', 'moon']"
              :class="['h-6 w-6 cursor-pointer text-brand-white-1', darkModeIconClass]"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
console.log(isDark.value);

const darkModeIconClass = computed(() => ({
  "hover:text-brand-green-1": !isDark.value,
  "hover:text-brand-warning": isDark.value
}));

const navbarItems = ref([
  {
    text: "Browse deals now",
    url: "/Browse/Deals"
  },
  {
    text: "About us",
    url: "/About"
  },
  {
    text: "FAQ",
    url: "/faq"
  }
]);
</script>
