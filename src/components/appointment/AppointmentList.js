import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { deleteAppointment, getAppointments } from "./AppointmentManager"
import { getQuestions } from "./QuestionManager"

export const AppointmentList = () => {
    const history = useHistory()
    const [appointments, seeAppointments] = useState([])
    const [questions, seeQuestions] = useState([])

    const appointmentFetcher = () => {
        getAppointments()
            .then(data => seeAppointments(data))
    }

    const questionFetcher = () => {
        getQuestions()
            .then(data => seeQuestions(data))
    }

    useEffect(() => {
        appointmentFetcher(); questionFetcher()
    }, [])


    return (
        <article className="appointments">
            <header className="appointments__header">
                <h1>Your Appointments</h1>
            </header>
            {
                appointments.map(appointment => {
                    return <section key={appointment.id} className="appointment__list">
                        <div>Date: {appointment.date}</div>
                        <div>Time: {appointment.time}</div>
                        <div>Provider: {appointment.provider.first_name} {appointment.provider.last_name}</div>

                        <div>Questions for this appointment:</div>
                        {
                            questions.map(question => {
                                if (question.appointment.id === appointment.id) {
                                    return <section key={question.id} className="question__list">
                                        <div>{question.content}</div>
                                    </section>
                                }
                            })
                        }
                        <div>
                            <button className="btn btn-delete"
                                onClick={() => deleteAppointment(appointment.id).then(() => appointmentFetcher())}
                            >Delete Appointment</button>
                        </div>
                    </section>
                })
            }

            <div>
                <button className="btn btn-create"
                    onClick={() => {
                        history.push({ pathname: "/appointments/new" })
                    }}
                >Add New Appointment</button>
            </div>
        </article>
    )
}