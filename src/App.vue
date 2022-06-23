<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
</script>

<template>
  <header-comp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

body {
 background: rgb(6,8,37);
background: linear-gradient(180deg, rgba(6,8,37,1) 37%, rgba(11,14,50,1) 53%, rgba(0,3,94,1) 75%, rgba(4,0,115,1) 89%);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}

main {
  height: 80%;
}

a {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #29f3e2;
}
</style>
