import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

//Actions
import { handleAddFavDataAction} from "../../Redux/actions/profile.action"

//CSS
import "./SinglePhoto.style.css"

const SinglePhoto = ({ data, isFavData }) => {

    const [modal, setModal] = useState(false);

    const handleShowModal = () => {
      setModal(!modal);
    }

    //Redux hook
    const dispatch = useDispatch();

    const handleAddFavData = () => {
      dispatch(handleAddFavDataAction(data, isFavData));
    };

    

    return (
      <figure>
        <img src={data?.src.large} alt="A windmill" onClick={handleShowModal} />

        {modal===true && (
          <dialog
          className="dialog"
          style={{ position: "absolute" }}
          open
          onClick={handleShowModal}
          >
            <img src={data?.src.large} alt="A windmill" 
            className="image" 
            onClick={handleShowModal} 
           />
          </dialog>
        )}

        <figcaption className="flex items-center">
          <AiOutlineHeart
            className={`text-${isFavData ? "red" : "black"} cursor-pointer z-50 `}
            onClick={handleAddFavData}
          />

          <a href={data?.photographer_url} target="_blank" rel="noreferrer" className="ml-2">
            {data?.photographer}
          </a>
        </figcaption>
    </figure>
    )
}

export default SinglePhoto
