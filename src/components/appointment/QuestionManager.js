export const getQuestions = () => {
    return fetch("https://care-always.herokuapp.com/questions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}

export const createQuestion = (question, appointmentId) => {
    question.appointmentId = parseInt(appointmentId)
    return fetch("https://care-always.herokuapp.com/questions", {
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
    return fetch (`https://care-always.herokuapp.com/questions/${question.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ca_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
}

export const deleteQuestion = questionId => {
    return fetch(`https://care-always.herokuapp.com/questions/${ questionId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(getQuestions)
}

export const getSingleQuestion = (id) => {
    return fetch(`https://care-always.herokuapp.com/questions/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}