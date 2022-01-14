import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import './QuestionList.css'

export default function QuestionList({ questions, photoMap}) {

    const [displayList, setDisplayList] = useState(false)

    useEffect(() => {
        (questions.length > 0) ? setDisplayList(true) : setDisplayList(false)
    }, [questions])


    const questionsList = questions.map((question, index) => {
        return <Question key={index} question={question} photoMap={photoMap} />
    })

    return (
        <div className={"list-container"}>
            {displayList ?  questionsList :  (<span className="empty-list-message">Your journey of making a survey begins.<br/>It shall be a short one...</span>)}
        </div>
    )
}
