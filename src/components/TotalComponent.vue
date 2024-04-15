<template>
    <div class="container">
        <h2>Founded {{ store.cardsFound }} Cards</h2>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'TotalComponent',
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>