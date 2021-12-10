import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAppointments } from "./AppointmentManager"

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
        </article>
    )
}