import axios from "axios"
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import CollapsibleButton from "../CollapsibleButton";
import Modal from "../Modal/Modal";
import ShareModalContent from "../ShareModalContent";
import CloseQuestionResult from "./CloseQuestionResult";
import OpenQuestionResult from "./OpenQuestionResult";

export default function Results() {

    const [answers, setAnswers] = useState([])
    const [survey, setSurvey] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState(null)
    const [finalAnswers, setFinalAnswers] = useState([])

    const [fetchData, setFetchData] = useState(true)
    const [id, setId] = useState(null)
    const [code, setCode] = useState(null)
    const location = useLocation()

    const [showDeletionModal, setShowDeletionModal] = useState(false)
    const [imageIds, setImageIds] = useState([])
    const [deletionCompleted, setDeletionCompleted] = useState(false)
    const [showShareModal, setShowShareModal] = useState(false)

    useEffect(() => {
        if (location.state !== null) {
            let { id } = location.state
            let { code } = location.state
            setId(id)
            setCode(code)
        }
    }, [location.state])


    const fetchAnswers = useCallback(
        () => {
            axios
                .get("https://" + window.location.host + "/answers/" + id)
                .then((res) => {
                    let answerDocuments = res.data
                    makeAnswersArray(answerDocuments)
                })
                .catch((e) => {
                    console.log("error: " + e)
                })
        },
        [id],
    )

    useEffect(() => {
        setFetchData(false)
        fetchAnswers()
    }, [fetchData, fetchAnswers])

    useEffect(() => {
        if (id !== null) {
            setFetchData(false)
            axios
                .get("https://" + window.location.host + "/survey/" + id)
                .then((res) => {
                    setSurvey(res.data)
                })
                .catch(() => {
                    console.log("error")
                })
        }
    }, [fetchData, id])

    const makeAnswersArray = (answerDocuments) => {
        let newAnswers = []
        answerDocuments.forEach((document) => {
            newAnswers.push(document.answers)
        })
        setAnswers(newAnswers)
    }

    //to get an array of arrays where each array is set of answers for one question, 
    //eg. finalAnswers[0] will be array of answers for first question gathered from all the answer documents
    useEffect(() => {
        if (answers !== null && answers[0] !== undefined) {
            let ans = []
            let numberOfQuestions = 0
            answers[0].forEach(() => {
                numberOfQuestions++
            })
            for (var i = 0; i < numberOfQuestions; i++) {
                ans[i] = []
            }
            answers.forEach((answerSet) => {
                let i = 0
                answerSet.forEach((answer) => {
                    ans[i].push(answer)
                    i++
                })
            })
            setFinalAnswers(ans)
        }
    }, [answers])

    const createResults = useCallback(
        () => {
            if (survey !== null && answers[0] !== undefined && finalAnswers !== []) {
                console.log("FI" + finalAnswers[3])
                let res = survey.questions.map((question, index) => {
                    if (finalAnswers[index] !== undefined) {
                        switch (question.type) {
                            case "choice": return <CloseQuestionResult key={index} question={question} answers={finalAnswers[index]} />
                            case "imageQuestion": return <CloseQuestionResult key={index} question={question} answers={finalAnswers[index]} id={id} />
                            case "openQuestion": return <OpenQuestionResult key={index} question={question} answers={finalAnswers[index]} />
                            default: return <p>There was an issue.</p>
                        }
                    }
                })
                setResults(res)
                setShowResults(true)
            }
        },
        [answers, finalAnswers, id, survey],
    )

    useEffect(() => {
        if (answers !== undefined) createResults()
    }, [createResults])

    const deleteSurvey = () => {
        //delete survey
        axios
            .delete('https://' + window.location.host + '/survey/delete/' + id)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log("Survey deletion error: " + e)
            })

        //delete all answers for this survey
        axios
            .delete('https://' + window.location.host + '/answers/delete/' + id)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log("answers deletion error: " + e)
            })

        //https://github.com/axios/axios/issues/897#issuecomment-343715381
        //won't fire if there weren't any images
        if (imageIds.length >= 2) {
            axios
                .delete('https://' + window.location.host + '/images/delete/' + id, { data: imageIds })
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => {
                    console.log("images deletion error: " + e)
                })
        }
        //I assume eveything works
        setDeletionCompleted(true)
    }

    const storeImageIds = useCallback(
        () => {
            survey.questions.forEach((question) => {
                if (question.type === "imageQuestion") {
                    question.possibleAnswers.forEach((ans) => {
                        setImageIds(oldImageIds => [...oldImageIds, ans])
                    })
                }
            })
        },
        [survey]
    )

    useEffect(() => {
        if (survey !== null && imageIds < 2) {
            storeImageIds()
        }
    }, [survey, imageIds, storeImageIds])

    const handleCloseDeletionModal = () => {
        setShowDeletionModal(false)
    }

    return (
        <div>
            <div className="top-part">
                <h1 className="site-title">QuickShot</h1>
                <h2 className="description">Surveys in no time</h2>
                {(survey !== null) && (
                    <div>
                        <div className="survey-title-box">
                            <h3 className="survey-title">Survey title: {(survey !== null) && survey.title}</h3>
                            <span className="survey-description">Description: {(survey !== null) && survey.description}</span>
                        </div>
                        <div className="sur-buttons">
                            <button className="fetch-btn" onClick={() => setFetchData(true)}>Fetch results</button>
                            <CollapsibleButton buttonText={"More"}>
                                <button className="delete-survey-btn" onClick={() => setShowDeletionModal(true)}>Delete survey</button>
                                <button className="share-btn" onClick={() => setShowShareModal(true)}>Share</button>
                            </CollapsibleButton>
                        </div>
                    </div>
                )}
            </div>
            {(survey == null) ? <p className="no-survey-message">Survey does not exist.</p> :
                (<div className="result-list">
                    {showResults ? results : <p>No answers yet</p>}
                    {showDeletionModal && (
                        !deletionCompleted ?
                            (<Modal closeModal={handleCloseDeletionModal} closeable={true}>
                                <p>This action is irreversible</p>
                                <button className="delete-survey-btn" onClick={deleteSurvey}>Delete survey</button>
                                <p className="additional-warning">Survey data will be permanently deleted</p>
                            </Modal>)
                            :
                            (<Modal closeable={false}>
                                <p>Deletion completed!</p>
                            </Modal>)
                    )}
                </div>)}
            {showShareModal && (
                <Modal closeable={true} closeModal={() => setShowShareModal(false)}>
                    <ShareModalContent surveyId={id} />
                </Modal>
            )}

            {(survey !== null) && <p>This code allows to come back to the results later: <b>{code}</b></p>}
        </div>
    )
}
