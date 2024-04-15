<template>
    <div class="card card-bg">
        <img :src="image" class="card-img-top" :alt="name" >
        <div class="card-body">
            <h5 class="card-title text-center">{{ name }}</h5>
            <p class="card-text text-center">
               <span>{{ archetype }}</span>
            </p>
        </div>
</div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:['image','name','archetype'],
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .card-bg{
       background-color: $mainColor; 
    }
    h5{
        font-size: 18px;
    }
</style>