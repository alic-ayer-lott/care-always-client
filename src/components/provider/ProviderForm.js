import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createProvider, getProviders } from "./ProviderManager"

export const ProviderForm = () => {
    const history = useHistory()
    const [currentProvider, setProviders] = useState({
        "first_name": "",
        "last_name": "",
        "specialty": "",
        "practice": "",
        "address": "",
        "phone": ""
    })
    const { providerId } = useParams()

    const saveProvider = (provider) => {
        provider.preventDefault()

        createProvider(currentProvider).then(() => {
            history.push('/providers')
        })
    }

    const changeProviderState = (provider) => {
        const newProviderState = Object.assign({}, currentProvider)
        newProviderState[provider.target.name] = provider.target.value
        setProviders(newProviderState)
    }

    useEffect(() => {
        if (providerId) {
            getProviders(providerId).then((providerData) => setProviders(
                {
                    ...providerData,
                    first_name: providerData.first_name,
                    last_name: providerData.last_name,
                    specialty: providerData.specialty,
                    practice: providerData.practice,
                    address: providerData.address,
                    phone: providerData.phone
                }
            ))
        }
    }, [providerId])


    return (
        <form className="newProviderForm">
            <h1 className="providerForm__title">Add New Provider</h1>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="first_name">First name: </label>
                    <input type="text" name="first_name" value={currentProvider.first_name} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="last_name">Last name: </label>
                    <input type="text" name="last_name" value={currentProvider.last_name} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="specialty">Specialty: </label>
                    <input type="text" name="specialty" value={currentProvider.specialty} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="practice">Practice name: </label>
                    <input type="text" name="practice" value={currentProvider.practice} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" value={currentProvider.address} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-input">
                    <label htmlFor="phone">Phone number: </label>
                    <input type="text" name="phone" value={currentProvider.phone} required autoFocus className="form-control"
                        onChange={changeProviderState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={saveProvider}
                className="btn btn-save">Save Provider</button>

        </form>
    )
}