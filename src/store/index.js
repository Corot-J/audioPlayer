import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import * as getters from './getters'
import * as actions from './actions'


Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
    getters,
    actions,
    state:{
        isPlaying: false,
        playList: [
            {
                name: '后来的我们'
            },
            {
                name: '终于结束的起点'
            }
        ]
    },
    mutations:{
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        },
        setPlayList: (state,list) => {
            state.playList = list;
        }
    }
})