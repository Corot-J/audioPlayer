import Vue from 'vue'
import VueResource from 'vuex'

Vue.use(VueResource)

export const playControl = ({state,commit}) => {
    state.isPlaying?commit('pause'):commit('play');
}
export const getPlayList = ({commit}) => {
    Vue.http.get(
        'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
    ).then((response) => {
        console.log(response)
        commit('setPlayList',response.body.song_list)
    })
}