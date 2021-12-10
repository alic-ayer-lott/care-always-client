export const getAppointments = () => {
    return fetch("http://localhost:8000/appointments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}

export const createAppointment = (appointment) => {
    return fetch("http://localhost:8000/appointments", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
     })
        .then(getAppointments)
}

export const deleteAppointment = appointmentId => {
    return fetch(`http://localhost:8000/appointments/${ appointmentId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(getAppointments)
}