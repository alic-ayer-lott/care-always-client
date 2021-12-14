import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createQuestion, updateQuestion, getSingleQuestion } from "./QuestionManager"

export const QuestionForm = () => {
    const history = useHistory()
    const [currentQuestion, setQuestions] = useState({
        "content": "",
        "appointmentId": ""
    })
    const { questionId } = useParams()
    const { appointmentId } = useParams()

    const changeQuestionState = (question) => {
        const newQuestionState = Object.assign({}, currentQuestion)
        newQuestionState[question.target.name] = question.target.value
        setQuestions(newQuestionState)
    }

    useEffect(() => {
        if (questionId) {
            getSingleQuestion(questionId).then((questionData) => setQuestions(
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
            <h1 className="questionForm__title">{questionId ? "Update Question" : "Add New Question"}</h1>
            <fieldset>
                <div className="form-input">
                    <input type="text" name="content" value={currentQuestion.content} required autoFocus className="form-control"
                        placeholder="Please add your question..."
                        onChange={changeQuestionState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    if (questionId) {
                        updateQuestion(currentQuestion)
                            .then(() => history.push("/appointments"))
                    } else {
                        createQuestion(currentQuestion, appointmentId).then(() => {
                            history.push('/appointments')
                        })
                    }
                }}
                className="btn btn-primary">Save Question</button>
        </form>
    )


}