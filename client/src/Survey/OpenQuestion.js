import { useState, useEffect } from "react"
import "./Survey.css"

export default function OpenQuestion({ question, questionIndex, answers, setAnswers }) {
    const [answerInput, setAnswerInput] = useState('')
    var arr = answers.slice()

    const handleAnswerInput = () => {
        setAnswerInput(document.getElementById("answer-box" + questionIndex).value)
    }

    useEffect(() => {
        arr[questionIndex] = answerInput
        setAnswers(arr)
    }, [answerInput, questionIndex])

    return (
        <div className="question-container">
            <label htmlFor="answerBox"><h4>{question.title}</h4></label>
            <textarea className="answer-text-area" maxLength="300" autoComplete="off" placeholder="Answer here" id={"answer-box" + questionIndex} name="answerBox" onInput={handleAnswerInput} />
        </div>
    )
}
