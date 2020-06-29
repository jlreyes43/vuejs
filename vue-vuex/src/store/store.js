import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters:{
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    },
    mutations:{
        increment: (state, payload) => {
            state.counter+=payload;
        },
        decrement: (state, payload) => {
            state.counter-=payload;
        }
    },
    // for commiting async, preferable even if not all mutations are not async just to be safe
    actions:{
        // context destructure, pulling only commit out
        // increment: ({commit}) => {
        //     commit('increment');
        // }
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: ({commit}, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({commit}) => {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement');
            }, 1000);
        }
    }
});