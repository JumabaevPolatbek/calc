import { ActionFunc, Actions } from "./types";

var regExp = /[*,/,+,--]/;

export const reducer = (state:any='', action: ActionFunc) => {
    switch (action.type) {
        case Actions.ADD:
            return state+=action.payload;
        case Actions.RESULT:
            switch(state.match(regExp)[0]){
                case '+':
                    return (+state[state.match(regExp).index-1])+(+state[state.match(regExp).index+1]);
                case '-':
                    return (+state[state.match(regExp).index-1])-(+state[state.match(regExp).index+1]);
                case '*':
                    return (+state[state.match(regExp).index-1])*(+state[state.match(regExp).index+1]);
                case '/':
                    return (+state[state.match(regExp).index-1])/(+state[state.match(regExp).index+1]);
                default:
                    return state
            }
        default:
            return state
    }
}