export enum Actions{
    ADD = "ADD",
    RESULT="RESULT"
}

type Add = {
    type: Actions.ADD,
    payload:number|any
}
type Result = {
    type:Actions.RESULT
}

export type ActionFunc=Add|Result