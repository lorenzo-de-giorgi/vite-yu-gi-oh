import {reactive} from 'vue';

export const store = reactive({
  base_url_api: 'https://db.ygoprodeck.com/api/v7/',
  endPoint: {
    cards: 'cardinfo.php',
    archetype: 'archetypes.php'
  },
  options: {
    params: {
      num: 20,
      offset: 0
    }
  },
  statusFilter: '',
  cards: [],
  archetypesList: [],
  cardsFound: 0,
  loading: false,
  error:{
    message: null
  }
});