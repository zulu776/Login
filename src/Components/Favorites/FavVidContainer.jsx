import React from 'react'
import { useSelector } from 'react-redux'

//Components
import SingleVideos from '../Videos/SingleVideos'

const FavVidContainer = ({ data, title }) => {

    const { favVid } = useSelector(store => store.profile)

    return (
            <>
        <h2 className="text-center text-2xl font-bold">
          {title ? title : "sin título"}
        </h2>
        <div className="container mt-5">
          {data?.map(item => (
            <SingleVideos
              key={item.id}
              data={item}
              isFavVid={favVid.some(video => video.id === item.id)}
            />
          ))}
        </div>
        </>
    )
}

export default FavVidContainer
