export interface Widget {
    id: number;
    action: string;
    amount: number;
    type: string;
    linked: boolean;
    selectedColor: string;
    active: boolean;
}

export interface State {
    widgets: Widget[];
}

export const state: State = {
    widgets: []
};