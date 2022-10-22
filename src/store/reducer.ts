import { ActionFunc, Actions } from "./types";

var regExp = /[*,/,+,--]/;

export const reducer = (state:any='', action: ActionFunc) => {
    switch (action.type) {
        case Actions.ADD:
            return state+=action.payload;
        case Actions.RESULT:
            var arr = state.split(regExp);
            switch (state.match(regExp)[0]) {
                case '+':
                    return +arr[0] + (+arr[1]);
                case '-':
                    return +arr[0] - (+arr[1]);
                case '*':
                    return +arr[0] * +arr[1];
                case '/':
                    return +arr[0] / +arr[1];
                default:
                    return state
            }
        default:
            return state
    }
}
