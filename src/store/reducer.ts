import { ActionFunc, Actions } from "./types";

var regExp = /[*,/,+,--]/;
const operands = ['-', '+', '/', '*', '.'];
// const numbers=[1,2,3,4,5,6,7,8,9,0]

export const reducer = (state: any = '', action: ActionFunc) => {
    
    switch (action.type) {
        case Actions.ADD:
            // if ((operands.includes(action.payload) && state === '') ||
            //     (operands.includes(action.payload) && operands.includes(state.slice(-1))) ||
            //     (action.payload === '0' && state.startsWith('0'))
            // ) {
            //     return state=action.payload
            // }
            // return state+=action.payload
            if ((operands.includes(action.payload) && state === '') ||
                (operands.includes(action.payload) && operands.includes(state.slice(-1)) )
            ) {
                return state
            }
            if (state.startsWith('0') && action.payload === '0') {
                return state
            }
            if (state.startsWith('0')) {
                return state=action.payload
            }
            if (state.search(regExp)!==-1 && action.payload==='0') {
                return state
            }
            return state+=action.payload
        case Actions.RESULT:
            var arr = state.split(regExp);
            switch (state.match(regExp)[0]) {
                case '+':
                    return state = (+arr[0] + (+arr[1])).toString();
                case '-':
                    return  state = (+arr[0] - (+arr[1])).toString();
                case '*':
                    return state = (+arr[0] * (+arr[1])).toString();
                case '/':
                    return state = (+arr[0] / (+arr[1])).toString();
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
        case Actions.RESET:
            return state = '0';
        default:
            return state
    }
}
