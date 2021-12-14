export const getQuestions = () => {
    return fetch("http://localhost:8000/questions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}

export const createQuestion = (question, appointmentId) => {
    question.appointmentId = parseInt(appointmentId)
    return fetch("http://localhost:8000/questions", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(question)
     })
        .then(getQuestions)
}

export const updateQuestion = (question) => {
    return fetch (`http://localhost:8000/questions/${question.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ca_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
}

export const deleteQuestion = questionId => {
    return fetch(`http://localhost:8000/questions/${ questionId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(getQuestions)
}

export const getSingleQuestion = (id) => {
    return fetch(`http://localhost:8000/questions/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}