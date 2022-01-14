import 'chart.js/auto';
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2'
import './Results.css'
import './CloseQuestionResult.css'
import Image from './Image';

export default function CloseQuestionResult({ question, answers, id }) {

    const [answersCount, setAnswersCount] = useState(null)

    const alphabet = Array.from("ABCDEFGH")
    const labels = alphabet.slice(0, question.possibleAnswers.length)

    const [possibleAnswers, setPossibleAnswers] = useState(null)
    const [totalVotes, setTotalVotes] = useState(0)

    useEffect(() => {
        if (answers !== undefined) {
            let answersCountArray = new Array(labels.length)
            answersCountArray.fill(0, 0, labels.length + 1)
            let k = 0
            labels.forEach((label) => {
                for (var i = 0; i < answers.length; i++) {
                    for (var j = 0; j < answers[i].length; j++) {
                        if (answers[i][j] === label) {
                            answersCountArray[k]++
                        }
                    }
                }
                k++
            })
            setAnswersCount(answersCountArray)
            //for example if there are 3 As chosen and 6 Bs, answersCount will be [3, 6]
        }
    }, [answers])

    useEffect(() => {
        if (answersCount !== null) {
            let sum = 0
            answersCount.forEach((item) => {
                sum = sum + item
            })
            setTotalVotes(sum)
        }
    }, [answersCount])

    const data = {
        labels: labels,
        datasets: [
            {
                label: question.title,
                backgroundColor: [
                    '#ddff00',
                    '#e6200e',
                    '#1ce80e',
                    '#140dde',
                    '#db2580',
                    '#39dbb3',
                    '#a8a492',
                    '#512361'
                ],
                hoverBackgroundColor: [
                    '#5f691e',
                    '#871f16',
                    '#1b7515',
                    '#141169',
                    '#6b1540',
                    '#277562',
                    '#474640',
                    '#34183d'
                ],
                hoverOffset: 15,
                data: answersCount
            }
        ]
    }

    useEffect(() => {
        if (answersCount !== null && totalVotes !== 0) {
            let possibleAns;
            if (question.type === 'imageQuestion') {
                possibleAns = question.possibleAnswers.map((ans, index) => {
                    console.log(ans)
                    return <Image key={index} surveyId={id} answer={ans} answersCount={answersCount} totalVotes={totalVotes} labels={labels} index={index}></Image>
                })
            } else {
                possibleAns = question.possibleAnswers.map((ans, index) => {
                    return <p key={index}>{labels[index] + ": " + ans + " - " + ((answersCount[index] / totalVotes) * 100).toFixed(0)+ "%"}</p>
                })
            }
            setPossibleAnswers(possibleAns)
        }
    }, [answersCount, totalVotes, id, question])

    return (

        <div className="question-container">
            <h4 className='question-title'>{question.title}</h4>
            <div className='grid-container'>
                <div className={` left-section ${(question.type === "imageQuestion") ? "photo-question-grid" : ""}`}>
                    {(possibleAnswers !== null) ? possibleAnswers : <p>Loading...</p>}
                </div>
                <div className='right-section'>
                    <Pie
                        data={data}
                        options={{
                            title: {
                                display: true,
                                text: question.title,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            responsive: true,
                            layout: {
                                padding: {
                                    bottom: 7
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
