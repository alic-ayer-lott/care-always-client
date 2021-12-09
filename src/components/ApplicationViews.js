import React from "react"
import { Route }  from "react-router-dom"
import { Profile } from "./auth/Profile"
import { ProviderList } from "./provider/ProviderList"

export const ApplicationViews = () => {
    return <>
    <main>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Route exact path="/providers">
            <ProviderList />
        </Route>
    </main>
    </>
}