<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCards(){
        axios.get(this.store.apiUrl + this.store.endPoint.name).then((res) => {
          this.store.name = res.data.data;
        })
      }
    },
    created() {
      this.getCards();
    },
  }
</script>

<style lang="scss" scoped>

</style>