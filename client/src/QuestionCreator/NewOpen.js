import { useEffect } from 'react'
import './NewOpen.css'

export default function NewOpen({ handleCloseModal, title }) {

    useEffect(() => {
        let button = document.getElementsByClassName("add-question-btn")[0]
        if (title !== '') {
            button.removeAttribute("disabled", "")
            button.classList.remove("disabled-button")
        }
        else {
            button.setAttribute("disabled", "")
            button.classList.add("disabled-button")
        }
    }, [title])

    return (
        <div>
            <textarea disabled id="answerBox" placeholder='Interviewees will answer here' name="answerBox" />
            <button className="add-question-btn" onClick={handleCloseModal}>Save</button>
        </div>
    )
}
