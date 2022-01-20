import { useState } from "react";
import "./Video.css";
import play from "../assets/play.svg"
import pause from "../assets/pause.svg"
import Like from "./Like";
import Subscribe from "./Subscribe";


export default function Video() {

    const [playBtn, setPlayBtn] = useState(true)

    return (
        <div className="channel">
            <div className="video">
                <img src={playBtn ? play : pause} alt="" onClick={() => setPlayBtn(a => !a)} />
            </div>
            <div className="buttons">
            <Like />
            <Subscribe />
            </div>
        </div>
    )
}