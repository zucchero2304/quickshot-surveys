import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import NewQuestion from "./QuestionCreator/NewQuestion";
import QuestionList from "./QuestionList/QuestionList";
import { Link } from "react-router-dom"
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import ShareModalContent from "./ShareModalContent";
import CollapsibleButton from "./CollapsibleButton";
import LoadSurveyModal from "./LoadSurveyModal";


function App() {
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [showAddQuestionBox, setShowAddQuestionBox] = useState(false)
  const [surveyTitle, setSurveyTitle] = useState("")
  const [surveyId, setSurveyId] = useState("")
  const [surveyDescription, setSurveyDescription] = useState("")
  const [survey, setSurvey] = useState(
    {
      id: "",
      title: "",
      description: "",
      questions: []
    }
  )
  const [photoMap, setPhotoMap] = useState(new Map())
  const [showFinishModal, setShowFinishModal] = useState(false)
  const [captchaValid, setCaptchaValid] = useState(false)
  const [showLoadSurveyModal, setShowLoadSurveyModal] = useState(false)
  const [surveyCode, setSurveyCode] = useState(null)

  useEffect(() => {
    setSurvey(prevSurvey => ({
      ...prevSurvey,
      title: surveyTitle,
      description: surveyDescription,
      questions: surveyQuestions
    }))
  }, [surveyTitle, surveyDescription, surveyQuestions])

  const postSurvey = () => {
    axios
      .post("http://localhost:5000/survey/add", survey)
      .then((res) => {
        console.log("Survey posted! Its id is:" + res.data)
        setSurveyId(res.data)
      })
      .catch(() => {
        console.log("Error")
      })
    setShowFinishModal(true)
  }

  const postSurveyCode = useCallback(
    () => {
      if (surveyId !== "") {
        axios
          .post("http://localhost:5000/surveyCodes/add", [surveyId])
          .then((res) => {
            console.log("Survey key generated: " + res.data)
            setSurveyCode(res.data)
          })
          .catch(() => {
            console.log("error generating survey code")
          })
      }
    },
    [surveyId],
  )

  useEffect(() => {
    postSurveyCode()
  }, [postSurveyCode])

  useEffect(() => {
    if (surveyId !== "") {
      photoMap.forEach((photo, key) => {
        postImage(photo, surveyId + ":" + key) //eg. 3m342k2mkkmm2:42223
      })
    }
  }, [surveyId, photoMap])

  const addQuestion = (question) => {
    setSurveyQuestions((prevQuestions) => {
      return [...prevQuestions, question]
    })
    setShowAddQuestionBox(false)
  }

  const resetSurvey = () => {
    if (window.confirm("Are you sure you want to reset your survey?")) {
      window.location.reload()
    }
  }


  const everythingCorrect = useCallback(
    () => {
      let button = document.getElementsByClassName("finish-survey-btn")[0]
      if (surveyTitle !== "" && surveyDescription !== "" && surveyQuestions.length > 0 && captchaValid) {
        button.removeAttribute("disabled", "")
        button.classList.remove("disabled-button")
      }
      else {
        button.setAttribute("disabled", "")
        button.classList.add("disabled-button")
      }
    },
    [captchaValid, surveyDescription, surveyQuestions.length, surveyTitle],
  )

  useEffect(() => {
    everythingCorrect()
  }, [surveyTitle, surveyDescription, surveyQuestions, captchaValid, everythingCorrect])

  const handleDescriptionInput = () => {
    let str = document.getElementById("description-input").value
    setSurveyDescription(str.substring(13, str.length))
  }

  //img as base64 posting to AWS S3
  const postImage = (base64Image, imageId) => {
    axios
      .post(
        "http://localhost:5000/images/add",
        [base64Image, imageId]
      )
      .then((res) => {
        console.log(res.data)
        console.log("image posted")
      })
      .catch(() => {
        console.log("Error posting image")
      })
  }

  const captchaOnChange = (response) => {
    axios
      .post("http://" + window.location.host + "/verify-captcha", [response])
      .then((res) => {
        setCaptchaValid(res.data)
      })
      .catch(() => {
        console.log("Captcha validation error")
      })
  }

  return (
    <div className="App">
      <div className="top-part">
        <h1>QuickShot</h1>
        <h2>Surveys in no time</h2>
        <div className="survey-title-box">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Survey title"
            onChange={(e) => setSurveyTitle((e.target.value).substring(7, e.target.value.length))}
            value={"Title: " + surveyTitle}
          />
          <textarea
            id="description-input"
            name="description-input"
            maxLength="300"
            autoComplete="off"
            placeholder="Survey description"
            onInput={handleDescriptionInput}
            value={"Description: " + surveyDescription} />
        </div>
        <div className="top-buttons">
          <button className="new-question-btn main-btn" onClick={() => setShowAddQuestionBox(true)}>Add question</button>
          <CollapsibleButton buttonText={"More"}>
            <button className="main-btn load-btn" onClick={() => setShowLoadSurveyModal(true)}>Load survey</button>
            <button className="reset-btn main-btn" onClick={resetSurvey}>Reset</button>
          </CollapsibleButton>
        </div>
      </div >

      <QuestionList questions={surveyQuestions} photoMap={photoMap} />
      {showAddQuestionBox && (
        <Modal closeModal={() => setShowAddQuestionBox(false)} closeable={true}>
          <NewQuestion addQuestion={addQuestion} closeModal={() => setShowAddQuestionBox(false)} photoMap={photoMap} setPhotoMap={setPhotoMap} />
        </Modal>
      )}
      <button className="finish-survey-btn main-btn" onClick={postSurvey}>Finish</button>
      <div className="captcha">
        <ReCAPTCHA
          sitekey="6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p"
          onChange={captchaOnChange}
        />
      </div>
      {showFinishModal && (
        <Modal closeable={false}>
          <ShareModalContent surveyId={surveyId} />
          <Link className="results-link"
            to={"/results"}
            style={{ color: 'black', display: "block" }}
            state={{ id: surveyId, code: surveyCode }}
          ><button>Go to results</button></Link>
          <p>This code allows to come back to the results later: <u>{surveyCode}</u></p>
        </Modal>
      )}
      {showLoadSurveyModal && (
        <LoadSurveyModal setShowLoadSurveyModal={setShowLoadSurveyModal}></LoadSurveyModal>
      )}
    </div >
  );
}

export default App;