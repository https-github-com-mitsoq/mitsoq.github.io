import Vue from 'vue'
import Vuex from 'vuex'
import fetchUserFromAPI from '../api'

Vue.use(Vuex)
export function createStore ()  {
    return new Vuex.Store({
        state: {
            users: {}
        },
        mutations: {
            UPDATE_USER_STATE: (state, payload ) => {
                Vue.set(state, 'users', payload)
            }
        },
        actions: {
            FETCH_USER: ({ commit }) => {
            return fetchUserFromAPI().then(res => {
                        commit('UPDATE_USER_STATE', res.data.results)
                    }).catch(err => {
                        commit('UPDATE_USER_STATE', { payload: err })
                    })
            }
        },
        getters: {
            getUsers: state => {
                return state.users
            }
        }
    })
}