import { useEffect, useState } from "react";

export default function OpenQuestionResult({ question, answers }) {

    const [answersArray, setAnswersArray] = useState(null)

    useEffect(() => {
        let answerList = answers.map((ans, index) => {
            return <div className="open-question-answer" key={index}>{index + 1 + ". " + ans}</div>
        })
        setAnswersArray(answerList)
    }, [answers])

    return (
        <div className="question-container">
            <h4>{question.title}</h4>
            <div className="open-question-results">
                {answersArray !== null ? answersArray : <p>Loading...</p>}
            </div>
        </div>
    )
}
