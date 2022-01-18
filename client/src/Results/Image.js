import axios from "axios"
import { useState } from "react"

export default function Image({ surveyId, answer, answersCount, totalVotes, labels, index }) {

    const [source, setSource] = useState(null)

    axios
        .get("https://" + window.location.host + "/images/" + surveyId + ":" + answer)
        .then((res) => {
            setSource(res.data)
        })
        .catch((e) => {
            console.log("Error getting image: " + e)
        })


    return (
        <div className='photo-grid-element'>
            <p>{labels[index] + ": " + ((answersCount[index] / totalVotes) * 100).toFixed(0) + "%"}</p>
            <img className='photo' src={source} alt="answer thumbnail"/>
        </div>
    )
}
