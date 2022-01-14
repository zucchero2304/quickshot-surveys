import { useState, useEffect } from "react"
import './MultiQuestion.css'

export default function MultiQuestion({ question, questionIndex, answers, setAnswers }) {

    const alphabet = "abcdefghijkl"

    var arr = answers.slice()

    const [checkboxAnswers, setCheckboxAnswers] = useState(new Array(question.possibleAnswers.length).fill(null))


    const handleCheckboxClick = (index) => {
        console.log(index)
        let tempArr = checkboxAnswers.slice()
        document.getElementById("answer-checkbox" + index + questionIndex).checked ?
            tempArr[index] = document.getElementById("answer-checkbox" + index + questionIndex).value : tempArr[index] = null
        console.log(tempArr)
        setCheckboxAnswers(tempArr)

    }

    useEffect(() => {
        arr[questionIndex] = checkboxAnswers
        setAnswers(arr)
    }, [checkboxAnswers, questionIndex, checkboxAnswers])

    const choices = question.possibleAnswers.map((answer, ind) => {
        return (
            <div className="one-checkbox-answer" key={ind}>
                <label className="multiquestion-label" htmlFor={"answer-checkbox" + ind}>{answer + " "}</label>
                <input type="checkbox" id={"answer-checkbox" + ind + questionIndex} name="answer-checkbox" onClick={() => handleCheckboxClick(ind)} value={alphabet.charAt(ind).toUpperCase()} />
            </div>)
    })

    return (
        <div className="question-container">
            <h4>{question.title}</h4>
            {choices}
        </div>
    )
}
