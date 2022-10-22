import { useSelector } from "react-redux"



export default function WindowCalc() {
    const result = useSelector<any,any>(state => state);

    return (
        <div className="result">
            {result}
        </div>
    )
}