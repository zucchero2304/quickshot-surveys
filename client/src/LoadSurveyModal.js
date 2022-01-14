import Modal from "./Modal/Modal";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";
import { Link } from "react-router-dom"


export default function LoadSurveyModal({ setShowLoadSurveyModal }) {

    const [surveyCode, setSurveyCode] = useState("")
    const [captchaValid, setCaptchaValid] = useState(false)
    const [surveyId, setSurveyId] = useState(null)
    const [showErrorMessage, setShowError] = useState(false)
    const recaptchaRef = useRef(null)
    const captchaOnChange = (response) => {
        axios
            .post("https://" + window.location.host + "/verify-captcha", [response])
            .then((res) => {
                setCaptchaValid(res.data)
            })
            .catch(() => {
                console.log("Captcha validation error")
                setCaptchaValid(false)
            })
    }

    const loadSurvey = (code) => {
        axios
            .get("https://" + window.location.host + "/surveyCodes/" + code)
            .then((res) => {
                console.log("Code matched, surveyId: " + res.data.surveyId)
                setSurveyId(res.data.surveyId)
                setShowError(false)
            })
            .catch(() => {
                console.log("error matching survey code")
                setShowError(true)
                setSurveyId(null)
                setCaptchaValid(false)
                if (recaptchaRef.current !== null) { recaptchaRef.current.reset() }
            })
    }

    useEffect(() => {
        let button = document.getElementById('load-survey-btn')
        if (captchaValid) {
            button.removeAttribute("disabled", "")
            button.classList.remove("disabled-button")
        }
        else {
            button.setAttribute("disabled", "")
            button.classList.add("disabled-button")
        }
    }, [captchaValid])

    return (
        <Modal closeModal={() => setShowLoadSurveyModal(false)} closeable={true}>
            <input
                type="text"
                id="survey-code"
                name="surveyCode"
                placeholder="Survey code"
                onChange={(e) => setSurveyCode((e.target.value).substring(13, e.target.value.length))}
                value={"Survey code: " + surveyCode}
            />
            <button id="load-survey-btn" onClick={() => loadSurvey(surveyCode)}>Load</button>
            {showErrorMessage && (
                <p>Code does not match</p>
            )}
            {surveyId === null ?
                <div className="captcha">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfSB_IdAAAAAEM7c5gXPgdsDoDMs0vwaMkPLe6p"
                        onChange={captchaOnChange}
                    />
                </div>
                :
                <Link className="results-link"
                    to={"/results"}
                    style={{ color: 'black', display: "block" }}
                    state={{ id: surveyId, code: surveyCode }}
                ><button>Go to results</button></Link>
            }
        </Modal>
    )
}
