import { useState, useEffect, useCallback } from "react"
import './NewImage.css'

export default function NewImage({ setAnswers, photoMap, setPhotoMap, title }) {

    const [currentSource, setCurrentSource] = useState(null)
    const [photos, setPhotos] = useState([])
    const alphabet = "abcdefghijkl"
    const [error, setError] = useState(false)

    const reader = new FileReader()

    const handleImageUpload = () => {
        const file = document.getElementById("file-input").files[0]
        reader.onload = (e) => {
            setCurrentSource(e.target.result)
        }
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if (currentSource !== null) {
            let temp = photos.slice()
            temp.push(currentSource)
            setPhotos(temp)
        }
    }, [currentSource])

    const saveAnswers = () => {
        const ansIds = []
        let map = photoMap
        photos.forEach((photo) => {
            let id = Math.floor(Math.random() * 100000)
            map.set(id, photo)
            //set (key, value)
            ansIds.push(id)
            //how to store photos and their names to save them in App.js and then be able to access? continue here<<<<<<<<<<<<<<<<
            // Maybe key-value pairs, in Map? 
        })
        setPhotoMap(map)
        setAnswers(ansIds)
    }


    const thumbnails = photos.map((photo, index) => {
        return (
            <div key={index}>
                <p>{alphabet.charAt(index)}</p>
                <img className="photo" src={photo} alt="answer thumbnail" />
            </div>
        )
    })

    const saveQuestion = () => {
        if (photos.length < 2) {
            setError(true)
        } else {
            setError(false)
            saveAnswers()
        }
    }

    const everythingCorrect = useCallback(
        () => {
            let button = document.getElementsByClassName("add-question-btn")[0]
            if (photos.length >= 2 && title !== '') {
                button.removeAttribute("disabled", "")
                button.classList.remove("disabled-button")
            }
            else {
                button.setAttribute("disabled", "")
                button.classList.add("disabled-button")
            }
        },
        [title, photos.length],
    )


    useEffect(() => {
        everythingCorrect()
    }, [photos, title, everythingCorrect])

    return (
        <div>
            <label htmlFor="file-input">
                <span className="add-photo">+</span>
            </label>
            <input
                style={{ display: 'none' }}
                type="file"
                accept="image/png, image/gif, image/jpeg"
                id="file-input"
                alt="file-input"
                onChange={handleImageUpload}>
            </input>
            <div className="photo-grid-container">
                {thumbnails}
            </div>
            {error && <p>Wrong number of photos</p>}
            <button className="add-question-btn" onClick={saveQuestion}>Save</button>
        </div>
    )
}
