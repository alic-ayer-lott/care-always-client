import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { deleteAppointment, getAppointments } from "./AppointmentManager"

export const AppointmentList = () => {
    const history = useHistory()
    const [appointments, seeAppointments ] = useState([])

    const appointmentFetcher = () => {
        getAppointments()
            .then(data => seeAppointments(data))
    }

    useEffect(() => {
        appointmentFetcher()
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
                        <div>{appointment.question.content}</div>

                        <div>
                            <button className="btn btn-delete"
                                onClick={() => deleteAppointment(appointment.id).then(() => appointmentFetcher())}
                                >Delete Appointment</button>
                        </div>
                    </section>
                })
            }
        </article>
    )
}