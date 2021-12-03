import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

import {handleAddFavVidACtion} from "../../Redux/actions/profile.action"

const SingleVideos = ({ data, isFavVid }) => {

    //Redux hook
    const dispatch = useDispatch();

    const handleAddFavVid = () => {
        dispatch(handleAddFavVidACtion(data, isFavVid));
      };

    return (
        <figure>
        <a href={data?.url} target="_blank" rel="noreferrer"><img src={data?.image} alt="A windmill" /></a>
        <figcaption className="flex items-center">
          <AiOutlineHeart
            className={`text-${isFavVid ? "red" : "black"} cursor-pointer z-50`}
            onClick={handleAddFavVid}
          />

          <a href={data?.user.url} target="_blank" rel="noreferrer" className="ml-2">
            {data?.user.name}
          </a>
        </figcaption>
    </figure>
    )
}

export default SingleVideos
