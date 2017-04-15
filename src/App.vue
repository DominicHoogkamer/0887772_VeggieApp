<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
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

</style>

