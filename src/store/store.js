import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
    getters:{
        playList: (state) => {
            var playList = state.playList.map(audio => {
                return {
                    name: '*'+ audio.name
                };
            });
            return playList
        }
    },
    mutations:{
        playControl: (state) => {
            state.isPlaying?store.commit('pause'):store.commit('play');
        },
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        }
    },
    actions:{
        playControl:(context) => {
            context.state.isPlaying?context.commit('pause'):context.commit('play');
        }
    }
})