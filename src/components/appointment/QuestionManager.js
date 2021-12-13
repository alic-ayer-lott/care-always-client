export const getQuestions = () => {
    return fetch("http://localhost:8000/questions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}