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
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile?.current_user?.first_name} {profile?.current_user?.last_name}
                </div>
                <div className="profile__username">
                    Username: {profile?.current_user?.username}
                </div>
            </section>
        </article>
    )
}
