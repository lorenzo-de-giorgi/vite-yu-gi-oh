<template>
    <main>
        <CharacterList />
    </main>
</template>

<script>
import CharacterList from './CharacterList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CharacterList,
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
       
    main{
        background-color: $mainColor;
    }
</style>