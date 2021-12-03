import React from 'react'
import { useSelector } from 'react-redux'

//Components
import FavVidContainer from '../../Components/Favorites/FavVidContainer'

const FavVid = () => {

    const { favVid } = useSelector(store => store.profile)

    return (
        <div>
            <FavVidContainer 
            data={favVid}
            title="Favorites Videos"
            />
        </div>
    )
}

export default FavVid
