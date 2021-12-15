export const getProfile = () => {
    return fetch("https://care-always.herokuapp.com/profile", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}
    
