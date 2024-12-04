<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const isHidden = ref(false);

const menuIcon = computed({
  get() {
    return !isHidden.value ? "pi pi-angle-left" : "pi pi-angle-right";
  },
});

function toggleMenu() {
  isHidden.value = !isHidden.value;
}
</script>

<template>
  <div class="flex">
    <!-- class="bg-green-400 min-h-screen w-12 lg:w-96 relative duration-500" -->
    <div
      :class="{
        'w-12 duration-300': isHidden,
        'w-12 lg:w-96 duration-300': !isHidden,
        'bg-green-100 min-h-screen relative ': true,
      }"
    >
      <div class="absolute -right-9 z-10 bg-green-600/60">
        <Button
          :icon="menuIcon"
          @click="toggleMenu()"
          class="outline-0 border-0 bg-transparent text-green-900"
        ></Button>
      </div>
      <!-- pi pi-angle-left -->
    </div>
    <RouterView class="bg-red-100 w-full" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
