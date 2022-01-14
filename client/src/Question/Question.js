import './Question.css'

export default function Question({ question, photoMap }) {
    const alphabet = "abcdefghijkl"
    let type = ""

    switch (question.type) {
        case "choice":
            type = "Multiple choice"
            break;
        case "openQuestion":
            type = "Open question"
            break;
        case "imageQuestion":
            type = "Image choice"
            break;
        default:
            type = "Question"
    }

    const answers = question.possibleAnswers.map((ans, index) => {
        switch (question.type) {
            case "choice":
                return <p key={index}>{alphabet.charAt(index).toUpperCase() + ":" + ans}</p>
            case "imageQuestion":
                return (
                    <div className='image-question-box' key={index}>
                        <p>{alphabet.charAt(index).toUpperCase() + ":"}</p>
                        <img className='photo' src={photoMap.get(ans)} height="200" alt="answer thumbnail"/>
                    </div>
                )
            default:
                return <p>There is a problem</p>
        }
    })

    return (
        <div className="question-container">
            <p>Question: {question.title}</p>
            <div className={`${(type === "Image choice") ? "photo-choices-grid-container" : ""}`}>
                {answers}
            </div>
            <p>Type: {type}</p>
        </div>
    )

    //add sth so that each answer has A, B, C etc.
}


