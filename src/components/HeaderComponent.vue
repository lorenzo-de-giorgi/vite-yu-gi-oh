<template>
    <header>
        <img src="../assets/img/logo.png" alt="">
        <h1>Yu-Gi-Oh</h1>
    </header>
    <div class="ldg-select container">
        <select class="form-select" aria-label="Default select example" @change="$emit('statusSearch')" v-model="store.statusFilter">
            <option value="">All</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypesList">{{ archetype.archetype_name }}</option>
        </select>
        
    </div>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    header{
        background-color: $white;
        display: flex;
        align-items: center;
        padding-left: 20px;
        
        img{
            width: 120px;

        }
    }
</style>