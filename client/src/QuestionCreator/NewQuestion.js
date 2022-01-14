import { useState } from 'react'
import NewChoice from './NewChoice'
import NewOpen from './NewOpen'
import NewImage from './NewImage'
import './NewQuestion.css'

export default function NewQuestion({ addQuestion, handleCloseModal, photoMap, setPhotoMap }) {

    const [title, setTitle] = useState('')
    const [questionType, setQuestionType] = useState(null)
    const [answers, setAnswers] = useState([])
    const [titleBoxVisible, setTitleBoxVisible] = useState(false)

    const handleAddQuestion = () => {
        const question = {
            title: title,
            possibleAnswers: answers,
            type: questionType
        }
        console.log("Question title is: " + question.title + " and answers are: " + question.possibleAnswers)
        addQuestion(question)
    }

    const onChangeQuestionType = (event) => {
        setQuestionType(event.target.value)
        setTitleBoxVisible(true)
    }

    const resetInputs = () => {
        setTitleBoxVisible(false)
        setQuestionType(null)
        var radio = document.querySelectorAll('input[type=radio]')
        radio.forEach((node) => (node.checked = false))
    }

    return (
        <div className="new-question-box">
            <form onSubmit={handleAddQuestion} className="new-question-form">
                <div className="radio-buttons" onChange={onChangeQuestionType}>
                    <label>
                        <input type="radio" name="question-type" value="choice"></input>
                        <span>Multiple choice</span>
                    </label>
                    <label>
                        <input type="radio" name="question-type" value="openQuestion"></input>
                        <span>Open</span>
                    </label>
                    <label>
                        <input type="radio" name="question-type" value="imageQuestion"></input>
                        <span>Image</span>
                    </label>
                </div>
                {titleBoxVisible &&
                    <div>
                        <input
                            type="text"
                            id="question"
                            name="question"
                            onChange={(e) => setTitle(e.target.value.substring(10, e.target.value.length))}
                            value={"Question: " + title}
                        />
                    </div>
                }
                {
                    {
                        'choice': <NewChoice setAnswers={setAnswers} title={title} />,
                        'openQuestion': <NewOpen handleCloseModal={handleCloseModal} title={title} />,
                        'imageQuestion': <NewImage setAnswers={setAnswers} photoMap={photoMap} setPhotoMap={setPhotoMap} title={title} />
                    }[questionType]
                }
                {questionType && (
                    <div>
                        <button className='reset-btn' onClick={resetInputs}>Reset</button>
                    </div>
                )}
            </form>
        </div>
    )
}
