<template>
    <main>
        <SelectMenu />
        <TotalComponent />
        <CharacterList />
    </main>
</template>

<script>
    import SelectMenu from './SelcetMenu.vue';
    import TotalComponent from './TotalComponent.vue';
    import CharacterList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CharacterList,
            SelectMenu,
            TotalComponent
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