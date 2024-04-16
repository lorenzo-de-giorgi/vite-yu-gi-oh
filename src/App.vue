<template>
  <HeaderComponent @statusSearch="setParams"/>
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
      setParams(){
        if(this.store.statusFilter){
          this.store.options.params.archetype = this.store.statusFilter
        } else {
          delete this.store.options.params.archetype
        }
        this.getCards()
      },
      getCards(){
        this.store.loading = true;
        axios.get(this.store.base_url_api + this.store.endPoint.cards, this.store.options).then((res) => {
          this.store.cards = res.data.data.map((card) => {
            return{
              id: card.id,
              title: card.name,
              image: card.card_images[0].image_url,
              archetype: card.archetype,
            }
          });
          this.store.cardsFound = res.data.meta.current_rows
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() => {
          setTimeout(() => {
            this.store.loading = false;
          }, 2000);
        })
      },
      getArchetype(){
        axios.get(this.store.base_url_api + this.store.endPoint.archetype).then((res) => {
          this.store.archetypesList = res.data.slice(0, 10);
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() => {
          setTimeout(() => {
            this.store.loading = false;
          }, 2000);
        })
      },
    },
    created() {
      this.getCards();
      this.getArchetype()
    },
  }
</script>

<style lang="scss" scoped>

</style>