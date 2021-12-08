import React from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"

export const CareAlways = () => (
    <>
        {/* <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} /> */}

        <Route path="/login">
            <Login />
        </Route>

        {/* <Route path="/register">
            <Register />
        </Route> */}

    </>
)