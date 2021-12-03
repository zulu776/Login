import React from 'react'
import { useSelector } from 'react-redux'

//Components
import FavImgContainer from '../../Components/Favorites/FavImgContainer'

const FavImg = () => {

    const { favData } = useSelector(store => store.profile)

    return (
      <FavImgContainer 
      data={favData}
      title="Favorites Images"/>
    )
}

export default FavImg
