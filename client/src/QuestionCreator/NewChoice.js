import { useState, useEffect, Fragment, useCallback } from "react"
import './NewChoice.css'

export default function NewChoice({ setAnswers, title }) {

    const [answersLetters, setAnswersLetters] = useState(["A", "B"])
    const alphabet = "abcdefgh"
    const [ansLimitError, setAnsLimitError] = useState(false)

    const [currentInput, setCurrentInput] = useState(null)

    const addNewAnswer = () => {
        if (answersLetters.length < 8) {
            setAnsLimitError(false)
            setAnswersLetters([...answersLetters, alphabet.charAt(answersLetters.length)])
        } else {
            setAnsLimitError(true)
        }
    }

    const deleteLastAnswer = () => {
        console.log(answersLetters)
        if (answersLetters.length > 2) {
            //proper way to delete array item in state:
            setAnswersLetters((prev) => {
                const next = [...prev]
                next.pop()
                return next
            })
            setAnsLimitError(false)
        } else {
            setAnsLimitError(true)
        }
    }

    const saveAllAnswers = () => {
        const answers = []
        let inputs = document.getElementsByClassName('answer-input')
        Array.from(inputs).forEach((input) => {
            if (input.value !== '') answers.push(input.value)
        })
        setAnswers(answers)
    }

    const answers = answersLetters.map((ans, index) => {
        return (
            <div key={index}>
                <input
                    className="answer-input"
                    type="text"
                    id={"answer" + index}
                    name="answer"
                    onChange={(e) => setCurrentInput(e.target.value)}
                    autoComplete="off"
                    placeholder="Answer"
                />
            </div>
        )
    })

    const everythingCorrect = useCallback(
        () => {
            let button = document.getElementsByClassName("add-question-btn")[0]
            let inputs = document.getElementsByClassName('answer-input')
            let correct = true
            Array.from(inputs).forEach((input) => {
                if (input.value === '') correct = false
            })
            if (correct && title !=='') {
                button.removeAttribute("disabled", "")
                button.classList.remove("disabled-button")
            }
            else {
                button.setAttribute("disabled", "")
                button.classList.add("disabled-button")
            }
        },
        [title],
    )

    useEffect(() => {
        everythingCorrect()
    }, [currentInput, answersLetters, title, everythingCorrect])


    return (
        <Fragment>
            <div className="new-choice-box">
                <div className="answers-box">
                    {answers}
                </div>
                <div className="add-delete-buttons">
                    <span onClick={addNewAnswer}>+</span>
                    <span onClick={deleteLastAnswer}>-</span>
                </div>
                {ansLimitError && (
                    <p>Cannot do that</p>
                )}
            </div>
            <button className="add-question-btn" onClick={() => saveAllAnswers()}>Save</button>
        </Fragment>
    )
}
