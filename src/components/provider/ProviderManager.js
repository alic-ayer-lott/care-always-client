export const getProviders = () => {
    return fetch("https://care-always.herokuapp.com/providers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(response => response.json())
}

export const createProvider = (provider) => {
    return fetch("https://care-always.herokuapp.com/providers", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(provider)
     })
        .then(getProviders)
}

export const deleteProvider = providerId => {
    return fetch(`https://care-always.herokuapp.com/providers/${ providerId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("ca_token")}`
        }
    })
        .then(getProviders)
}