<template>
    <main>
        <SelectMenu />
        <CharacterList />
    </main>
</template>

<script>
    import SelectMenu from './SelcetMenu.vue'
    import CharacterList from './CharacterList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CharacterList,
            SelectMenu
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    main{
        background-color: $mainColor;
    }

    .ldg-select{
        padding: 30px;
        width: 14%;
        margin-left: 270px;
    }
</style>