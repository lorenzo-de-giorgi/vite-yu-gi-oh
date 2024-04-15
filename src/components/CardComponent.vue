<template>
    <div class="card">
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
    h5{
        font-size: 17px;
    }
</style>