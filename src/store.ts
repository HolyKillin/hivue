import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      GoodsCurrentSelKind: 0
  },
  mutations: {
      changeCurrentSelKind(state, kind){
          state.GoodsCurrentSelKind = kind;
      },
  },
  actions: {

  },
});
