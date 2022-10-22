import { Actions } from "./types"

export const add = (btn: number|string) => {
    return {
        type: Actions.ADD,
        payload:btn
    }
}

export const result = () => {
    return {
        type: Actions.RESULT,
    }
};