import React from "react"
import { useDispatch } from "react-redux"
import { add,result } from "../store/actionsFunc"
type Props = {
    item:number|any
}
export default function Button({ item }:Props) {
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => {
                if (item !== '=') {
                    dispatch(add(item))
                } else dispatch(result())
            }}
        >{item}</button>
    )
}