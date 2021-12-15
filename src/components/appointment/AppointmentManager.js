export const getAppointments = () => {
    return fetch("https://care-always.herokuapp.com/appointments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}

export const createAppointment = (appointment) => {
    return fetch("https://care-always.herokuapp.com/appointments", {
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
    return fetch(`https://care-always.herokuapp.com/appointments/${ appointmentId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(getAppointments)
}