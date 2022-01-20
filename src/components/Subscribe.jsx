import { useState } from "react"
import "./Subscribe.css"

export default function Subscribe() {
    
    const [sub, setSub] = useState(false)
    
    return (
        <button className={sub ? "subscribe true" : "subscribe"} onClick={() => setSub(prevState => !prevState)}>{sub ? "INSCRITO" : "INSCREVER-SE"}</button>
    )
}