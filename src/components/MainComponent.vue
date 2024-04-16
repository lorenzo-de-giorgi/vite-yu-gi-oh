<template>
    <main>
        <TotalComponent />
        <CharacterList />
    </main>
</template>

<script>
    import { store } from '../store';
    import TotalComponent from './TotalComponent.vue';
    import CharacterList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CharacterList,
            TotalComponent
        },
        data() {
            return {
                
            }
        },
        methods: {
            setParams(){
                if(this.store.statusFilter){
                    this.store.options.paramas.archetype = this.store.statusFilter
                } else {
                    delete this.store.options.params.archetype
                }
                this.getCards()
            },
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