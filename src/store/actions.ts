import { ActionTree } from 'vuex';
import { State } from './state';

export const actions: ActionTree<State, State> = {
    async fetchWidgets({ commit }) {
        const response = await fetch(
            'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets'
        );
        const data = await response.json();
        commit('setWidgets', data);
    }
};