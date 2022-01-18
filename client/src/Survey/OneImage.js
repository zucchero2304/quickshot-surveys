import { useState } from "react"
import axios from "axios"

export default function OneImage({ surveyId, answer, index, handleCheckboxClick }) {

    const [source, setSource] = useState(null)
    const alphabet = "abcdefghijkl"

    axios
        .get("https://" + window.location.host + "/images/" + surveyId + ":" + answer)
        .then((res) => {
            setSource(res.data)
        })
        .catch((e) => {
            console.log("Error getting image: " + e)
        })


    return (
        <div className="image-question-box" key={index}>
            <input type="checkbox" id={"photo-checkbox" + index} className="photo-checkbox" name="photo-checkbox" onClick={() => handleCheckboxClick(index)} value={alphabet.charAt(index).toUpperCase()} />
            <label className="photo-label" htmlFor={"photo-checkbox" + index}>
                <img src={source} className="photo" alt="answer thumbnail"/>
                <div className="overlay"><span>&#10003;</span></div>
            </label>
        </div>
    )
}
