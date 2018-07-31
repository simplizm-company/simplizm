import Vue from 'vue';
import Vuex from 'vuex';
import window from './ui/window';
import common from './ui/common';

Vue.use(Vuex);

const createStore = () => new Vuex.Store({
    modules: {
        window,
        common
    }
});
  
export default createStore;