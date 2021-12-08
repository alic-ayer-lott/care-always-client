import React, { useEffect, useState } from "react"
import { getProfile } from "./ProfileManager.js"


export const Profile = () => {
    const [profile, changeProfile] = useState({})

    useEffect(() => {
        getProfile().then(data => changeProfile(data))
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Personal Info</h3>
                </header>
                <div className="profile__first_name">
                    First Name: {profile?.current_user?.first_name}
                </div>
                <div className="profile__last_name">
                    Last Name: {profile?.current_user?.last_name}
                </div>
                <div className="profile__username">
                    Username: {profile?.current_user?.username}
                </div>
                <div className="profile__email">
                    Email Address: {profile?.current_user?.email}
                </div>
            </section>
        </article>
    )
}
