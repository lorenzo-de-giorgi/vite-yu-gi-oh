<template>
    <header>
        <img src="../assets/img/logo.png" alt="">
        <h1>Yu-Gi-Oh</h1>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
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