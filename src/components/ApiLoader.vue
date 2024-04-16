<template>
    <div class="d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-spinner fa-spin"></i>
    </div>
</template>

<script>
    export default {
        name: 'ApiLoader'
    }
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    color: white;
    font-size: 4rem;

}
</style>