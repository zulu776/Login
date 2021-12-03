import React from "react";
import { useSelector } from "react-redux";

//Components
import SinglePhoto from "../Home/SinglePhoto";

//CSS
import "./ImgContainer.style.css"

const ImgContainer = ({ data, title }) => {

    //Redux Hook
    const { favData } = useSelector(store => store.profile);

    return (
        <>
        <h2 className="text-center text-2xl font-bold">
          {title ? title : "sin título"}
        </h2>
        <div className="container mt-5">
          {data?.map(item => (
            <SinglePhoto
              key={item.id}
              data={item}
              isFavData={favData.some(photo => photo.id === item.id)}
            />
          ))}
        </div>
      </>
    )
}

export default ImgContainer
