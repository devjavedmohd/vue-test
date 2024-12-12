import { MutationTree } from 'vuex';
import { State, Widget } from './state';

export const mutations: MutationTree<State> = {
    setWidgets(state, widgets: Widget[]) {
        state.widgets = widgets;
    },
    updateWidget(state, { id, key, value }: { id: number; key: string; value: any }) {
        const widget = state.widgets.find((widget) => widget.id === id);
        if (widget) widget[key] = value;
    }
};