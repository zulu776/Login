import React from 'react'
import { useSelector } from 'react-redux';

//CSS
import "./ProfileInfo.style.css"

const ProfileInfo = () => {

    const { user } = useSelector(store => store.session);
    const { favData, favVid } = useSelector(store => store.profile);

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col ">
            <div className="info-container rounded-xl bg-light_green w-2/4 tablet:w-4/5 flex  flex-col justify-center items-center m-auto flex-wrap">
                <p className="py-8 text-xl font-mono">User Name:  {user.displayName}</p>
                <p className="py-8 text-xl font-mono">E-mail: {user.email}</p>
                <p className="py-8 text-xl font-mono">Favorites Images: {favData.length}</p>
                <p className="py-8 text-xl font-mono">Favorites Videos: {favVid.length}</p>
            </div>
        </div>
    )
}

export default ProfileInfo
