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
        this.store.loading = true;
        axios.get(this.store.apiUrl + this.store.endPoint.name).then((res) => {
          this.store.name = res.data.data;
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() => {
          setTimeout(() => {
            this.store.loading = false;
            console.log('finally');
          }, 2000);
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