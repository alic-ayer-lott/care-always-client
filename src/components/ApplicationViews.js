import React from "react"
import { Route }  from "react-router-dom"
import { Profile } from "./auth/Profile"

export const ApplicationViews = () => {
    return <>
    <main>
        <Route exact path="/Profile">
            <Profile />
        </Route>
    </main>
    </>
}