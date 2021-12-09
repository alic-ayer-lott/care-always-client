export const getProviders = () => {
    return fetch("http://localhost:8000/providers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createProvider = (provider) => {
    return fetch("http://localhost:8000/providers", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(provider)
     })
        .then(getProviders)
}

export const deleteProvider = providerId => {
    return fetch(`http://localhost:8000/providers/${ providerId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(getProviders)
}