<template>
  <div id="app">
    <router-view></router-view>
      <app-header></app-header>

  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'


export default {
  name: 'app',
        components: {
            AppHeader
        }
}

</script>

<style>


header {
  position : absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border: none;
  background-color: #00b52a;
  color: #FFF;
}

</style>

