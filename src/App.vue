<template>
  <HeaderComponent/>
  <MainComponent />
</template>

<script>
  import {store} from './store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue'
  export default {
    name: 'Vue',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>