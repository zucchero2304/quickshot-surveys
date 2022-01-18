import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import Modal from '../Modal/Modal';
import List from './List';
import './Survey.css';
import ReCAPTCHA from 'react-google-recaptcha';
import '../App.css';
import { Link } from 'react-router-dom';


export default function Survey() {

    const [survey, setSurvey] = useState(null)
    const [answers, setAnswers] = useState([])
    const [questions, setQuestions] = useState([])
    const [showModal, setShowModal] = useState(false)

    const [showQuestions, setShowQuestions] = useState(false)
    const [answersSent, setAnswersSent] = useState(false)
    const [captchaValid, setCaptchaValid] = useState(false)


    //gets id of particular survey from url
    const { id } = useParams()


    const getSurvey = useCallback(
        () => {
            axios
                .get(window.location.host + "/survey/" + id)
                .then((res) => {
                    setSurvey(res.data)
                    setShowQuestions(true)
                })
                .catch(() => {
                    console.log("error")
                    setShowQuestions(false)
                })
        },
        [id],
    )

    useEffect(() => {
        getSurvey()
    }, [getSurvey])

    const postAnswers = () => {
        axios
            .post(
                window.location.host + "/answers/add",
                { answerSet: answers, surveyId: id }
            )
            .then((res) => {
                console.log(res)
                console.log("answers posted")
                setAnswersSent(true)
            })
            .catch(() => {
                console.log("Error posting answers")
            })
    }

    useEffect(() => {
        if (survey !== null) setQuestions(survey.questions)
    }, [survey])

    useEffect(() => {
        try {
            setAnswers(new Array(questions.length).fill(null))
        } catch (e) {
            console.log("array not yet filled")
        }
    }, [questions])

    const handleFinishSurvey = () => {
        let allAnswersFilled = true
        answers.forEach((answer) => {
            if (answer === null) allAnswersFilled = false
        })
        allAnswersFilled ? setShowModal(true) : setShowModal(false)
    }

    const everythingCorrect = useCallback(
        () => {
            let button = document.getElementsByClassName("finish-btn")[0]
            let allAnswersFilled = true
            if (answers !== []) {
                answers.forEach((answer) => {
                    if (answer === null || answer === "") {
                        allAnswersFilled = false
                    } else {
                        if (Array.isArray(answer)) {
                            if (checkIfArrayIsAllNulls(answer)) allAnswersFilled = false
                        } else {
                            if (checkIfAllWhitespaces(answer)) allAnswersFilled = false
                        }
                    }
                })
            } else allAnswersFilled = false

            console.log("AS: " + allAnswersFilled)
            if (allAnswersFilled) {
                button.removeAttribute("disabled", "")
                button.classList.remove("disabled-button")
            }
            else {
                button.setAttribute("disabled", "")
                button.classList.add("disabled-button")
            }
        },
        [answers],
    )

    useEffect(() => {
        if (survey !== null) everythingCorrect()
    }, [survey, everythingCorrect])

    const checkIfAllWhitespaces = (str) => {
        //could be improved, other loop would be better
        let isAllWhitespaces = true
        Array.from(str).forEach((char) => {
            if (char !== " ") isAllWhitespaces = false
        })
        return isAllWhitespaces
    }

    const checkIfArrayIsAllNulls = (arr) => {
        //same as above
        let isNull = true
        arr.forEach((item) => {
            if (item !== null) isNull = false
        })
        return isNull
    }

    const captchaOnChange = (response) => {
        axios
            .post(window.location.host + "/verify-captcha", [response])
            .then((res) => {
                setCaptchaValid(res.data)
            })
            .catch(() => {
                console.log("Captcha validation error")
            })
    }

    const handleCloseCaptchaModal = () => {
        window.grecaptcha.reset();
        setCaptchaValid(false)
        setShowModal(false)
    }

    return (
        <div className="survey-view">
            <div className="top-part">
                <Link className="home-link"
                    to={"/"}>
                    <button className="home-btn">HOME</button>
                </Link>
                <h1 className="site-title">QuickShot</h1>
                <h2 className="description">Surveys in no time</h2>
                {survey !== null && (
                    <div className="survey-title-box">
                        <h3 className="survey-title">Survey title: {(survey !== null) && survey.title}</h3>
                        <span className="survey-description">Description: {(survey !== null) && survey.description}</span>
                    </div>
                )}
            </div>

            {survey !== null ?
                <div>
                    {showQuestions ? (
                        <List questions={questions} answers={answers} setAnswers={setAnswers} />
                    ) : <span>Loading...</span>}
                    <button className='finish-btn' onClick={handleFinishSurvey}>Finish</button>
                </div>
                :
                <p className="no-survey-message">Survey does not exist.</p>
            }


            {showModal && (
                answersSent ?
                    (<Modal closeable={false}>
                        <h3>Thank you!</h3>
                    </Modal>)
                    :
                    (<Modal closeModal={handleCloseCaptchaModal} closeable={true}>
                        <div className="captcha">
                            <ReCAPTCHA
                                sitekey="6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p"
                                onChange={captchaOnChange}
                            />
                        </div>
                        {captchaValid && <button className='final-send-btn' onClick={postAnswers}>Send Answers</button>}
                    </Modal>
                    )
            )}
        </div>
    )
}
