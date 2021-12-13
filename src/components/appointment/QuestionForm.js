import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createQuestion, getQuestions } from "./QuestionManager"

export const QuestionForm = () => {
    const history = useHistory()
    const [currentQuestion, setQuestions] = useState({
        "content": "",
        "appointmentId": ""
    })
    const { questionId } = useParams()
    const { appointmentId } = useParams()

    const saveQuestion = (question) => {
        question.preventDefault()

        createQuestion(currentQuestion, appointmentId).then(() => {
            history.push('/appointments')
        })
    }

    const changeQuestionState = (question) => {
        const newQuestionState = Object.assign({}, currentQuestion)
        newQuestionState[question.target.name] = question.target.value
        setQuestions(newQuestionState)
    }

    useEffect(() => {
        if (questionId) {
            getQuestions(questionId).then((questionData) => setQuestions(
                {
                    ...questionData,
                    content: questionData.content,
                    appointmentId: questionData.appointment.id
                }
            ))
        }
    }, [questionId])


    return (
        <form className="newQuestionForm">
            <h1 className="questionForm__title">Add New Question</h1>
            <fieldset>
                <div classNam="form-input">
                    <input type="text" name="content" value={currentQuestion.content} required autoFocus className="form-control"
                        placeholder="Please add your question..."
                        onChange={changeQuestionState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={saveQuestion}
                className="btn btn-save">Save Question</button>
        </form>
    )


}