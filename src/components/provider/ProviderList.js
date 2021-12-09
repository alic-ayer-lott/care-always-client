import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getProviders, deleteProvider } from "./ProviderManager.js"
// import { Link } from "react-router-dom"

export const ProviderList = () => {
    const history = useHistory()
    const [providers, assignProviders] = useState([])

    const providerFetcher = () => {
        getProviders()
            .then(data => assignProviders(data))
    }

    useEffect(() => {
        providerFetcher()
    }, [])


    return (
        <article className="providers">
            <header className="providers__header">
                <h1>Current Providers</h1>
            </header>
            {
                providers.map(provider => {
                    return <section key={provider.id} className="provider__list">
                        <div>Name: {provider.first_name} {provider.last_name}</div>
                        <div>Specialty: {provider.specialty}</div>
                        <div>Practice: {provider.practice}</div>
                        <div>Address: {provider.address}</div>
                        <div>Phone Number: {provider.phone}</div>

                        <div>
                            <button className="btn btn-delete"
                                onClick={() => deleteProvider(provider.id).then(() => providerFetcher())}
                            >Delete Provider</button>
                        </div>

                    </section>
                })
            }

            <div>
                <button className="btn btn-create"
                    onClick={() => {
                        history.push({ pathname: "/providers/new" })
                    }}
                >Add New Provider</button>
            </div>
        </article>
    )
}