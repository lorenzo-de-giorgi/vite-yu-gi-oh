<template>
    <div class="container">
    <div class="row gy-4">
     <div class="col-12 col-md-6 col-lg-3" v-for="name in store.name">
       <CardComponent :image="name.card_images[0].image_url_small" :name="name.name" :archetype="name.archetype"/>
     </div>
    </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CharacterList',
        components:{
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>