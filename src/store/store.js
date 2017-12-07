import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

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
            return state.playList
        }
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
    },
    actions:{
        playControl:(context) => {
            context.state.isPlaying?context.commit('pause'):context.commit('play');
        },
        getPlayList:(context) => {
            Vue.http.get(
                'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
            ).then((response) => {
                console.log(response)
                context.commit('setPlayList',response.body.song_list)
            })
        }
    }
})