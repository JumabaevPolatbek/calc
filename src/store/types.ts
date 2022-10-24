
export enum Actions{
    ADD = "ADD",
    RESULT = "RESULT",
    RESET="RESET"
}

type Add = {
    type: Actions.ADD,
    payload:number|any
}
type Result = {
    type:Actions.RESULT
}
type Reset = {
    type:Actions.RESET
}
export type ActionFunc=Add|Result|Reset