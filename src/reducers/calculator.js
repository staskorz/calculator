import { CALCULATOR_BUTTON_CLICK, CALCULATOR_LOADED } from '../actions/calculator';
import calculate from '../logic/calculate';

const defaultState = {
    total: null,
    next: null,
    operation: null,
}
export default function calculator(state = defaultState, action) {
    switch (action.type) {
        case CALCULATOR_BUTTON_CLICK:
            return {
                ...state,
                ...calculate(state, action.buttonName)
            }
        case CALCULATOR_LOADED:
            return {
                ...state,
                loaded: true
            }
        default:
            return state;
    }
}