<template>
    
    <div class="container">
        <div class="ldg-container">
            <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
            <div class="row gy-4" v-if="!store.loading">
                <div class="col-12 col-md-6 col-lg-3 ldg-card" v-for="card in store.cards" :key="card.id">
                    <CardComponent :image="card.image" :name="card.title" :archetype="card.archetype"/>
                </div>
            </div>
            <ApiLoader v-else />
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import ApiLoader from './ApiLoader.vue';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components:{
            CardComponent,
            ApiLoader
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .ldg-container{
        background-color: white;
        padding-top: 50px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .ldg-card{
        width: calc(100% / 5);
    }
</style>