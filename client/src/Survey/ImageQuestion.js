import { useParams } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import './ImageQuestion.css'
import OneImage from "./OneImage"


export default function ImageQuestion({ question, questionIndex, answers, setAnswers }) {

    const [choices, setChoices] = useState([])
    const { id: surveyId } = useParams()

    const [checkboxAnswers, setCheckboxAnswers] = useState(new Array(question.possibleAnswers.length).fill(null))
    var arr = answers.slice()

    const handleCheckboxClick = useCallback(
        (index) => {
            let tempArr = checkboxAnswers.slice()
            document.getElementById("photo-checkbox" + index).checked ?
                tempArr[index] = document.getElementById("photo-checkbox" + index).value : tempArr[index] = null
            setCheckboxAnswers(tempArr)
        },
        [checkboxAnswers],
    )

    useEffect(() => {
        let choicesArr = question.possibleAnswers.map((ans, index) => {
            return <OneImage key={index} surveyId={surveyId} answer={ans} index={index} handleCheckboxClick={handleCheckboxClick} />
        })
        setChoices(choicesArr)
    }, [question, handleCheckboxClick, surveyId])

    useEffect(() => {
        arr[questionIndex] = checkboxAnswers
        setAnswers(arr)
    }, [checkboxAnswers, questionIndex])

    return (
        <div className="question-container">
            <h4>{question.title}</h4>
            <div className="photo-choices-grid-container">
                {choices}
            </div>
        </div>
    )
}
