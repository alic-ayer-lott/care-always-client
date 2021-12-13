import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createAppointment, getAppointments } from "./AppointmentManager"
import { getProviders } from "../provider/ProviderManager"

export const AppointmentForm = () => {
    const history = useHistory()
    const [providers, setProviders] = useState([])
    const [currentAppointment, setAppointments] = useState({
        "date": "",
        "time": "",
        "provider": "",
        "user": ""
    })
    const { appointmentId } = useParams()

    useEffect(() => {
        getProviders()
        .then((data) => setProviders(data))
    }, [])

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
                    <select name="providerId" value={currentAppointment.providerId} className="form-control"
                        onChange={ changeAppointmentState }>
                            <option value="0">Select a provider...</option>
                            {
                                providers.map(provider => (
                                    <option key={provider.id} value={provider.id}>
                                        {provider.first_name} {provider.last_name}
                                    </option>
                                ))
                            }
                        </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={saveAppointment}
                className="btn btn-save">Save Appointment</button>
        </form>
    )
}