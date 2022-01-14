import ImageQuestion from "./ImageQuestion";
import MultiQuestion from "./MultiQuestion";
import OpenQuestion from "./OpenQuestion";

export default function List({ questions, answers, setAnswers}) {

    const questionElems = questions.map((question, index) => {
        switch (question.type) {
            case "choice":
                return <MultiQuestion key={index} questionIndex={index} question={question} answers={answers} setAnswers={setAnswers}></MultiQuestion>
            case "openQuestion":
                return <OpenQuestion key={index} questionIndex={index} question={question} answers={answers} setAnswers={setAnswers}></OpenQuestion>
            case "imageQuestion":
                return <ImageQuestion key={index} questionIndex={index} question={question} answers={answers} setAnswers={setAnswers}></ImageQuestion>
            default:
                return <p>There was an issue</p>
        }
    })

    return (
        <div>
            {questionElems}
        </div>
    )
}
