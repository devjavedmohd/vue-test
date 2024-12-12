import { GetterTree } from 'vuex';
import { State } from './state';

export const getters: GetterTree<State, State> = {
    widgets: (state) => state.widgets
};