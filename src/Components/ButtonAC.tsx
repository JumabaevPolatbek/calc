
import { useDispatch } from "react-redux"
import { reset } from "../store/actionsFunc"

export default function ButtonAC() {
    const dispatch=useDispatch()
    return (
        <div className="ac">
            <button onClick={()=>dispatch(reset())}>Очистить</button>
        </div>
    )
}