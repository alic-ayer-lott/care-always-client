import { current } from "immer"
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createAppointment, getAppointments } from "./AppointmentManager"

export const AppointmentForm = () => {
    const history = useHistory()
    const [currentAppointment, setAppointments] = useState({
        "date": "",
        "time": "",
        "provider": "",
        "user": ""
    })
    const { appointmentId } = useParams()

    const saveAppointment = (appointment) => {
        appointment.preventDefault()

        createAppointment(currentAppointment).then(() => {
            history.push('/appointments')
        })
    }

    const changeAppointmentState = (appointment) => {
        const newAppointmentState = Object.assign({}, currentAppointment)
        newAppointmentState[appointment.target.name] = appointment.target.value
        setAppointments(newAppointmentState)
    }

    useEffect(() => {
        if (appointmentId) {
            getAppointments(appointmentId).then((appointmentData) => setAppointments(
                {
                    ...appointmentData,
                    date: appointmentData.date,
                    time: appointmentData.time,
                    provider: appointmentData.provider,
                    user: appointmentData.user
                }
            ))
        }
    }, [appointmentId])


    return (
        <form className="newAppointmentForm">
            <h1 className="appointmentForm__title">Add New Appointment</h1>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" value={currentAppointment.date} required autoFocus className="form-control"
                        onChange={changeAppointmentState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" value={currentAppointment.time} required autoFocus className="form-control"
                        onChange={changeAppointmentState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="providerId">Provider: </label>
                    <input type="text" name="date" value={currentAppointment.date} required autoFocus className="form-control"
                        onChange={changeAppointmentState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={saveAppointment}
                className="btn btn-save">Save Appointment</button>
        </form>
    )
}