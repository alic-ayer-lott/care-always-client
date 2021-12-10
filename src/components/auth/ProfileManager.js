export const getProfile = () => {
    return fetch("http://localhost:8000/profile", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}
    
