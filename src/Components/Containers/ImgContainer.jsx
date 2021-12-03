import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

//Components
import SinglePhoto from "../Home/SinglePhoto";

//CSS
import "./ImgContainer.style.css"

const ImgContainer = ({ data, title, handleFetchDataNextPage }) => {

    //State
    const [isVisible, setIsVisible] = useState(false);

    //Ref
    const containerRef = useRef(null);

    //Redux Hook
    const { favData } = useSelector(store => store.profile);

     //Funciones
    const callbackFunction = entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

   
    useEffect(() => {

      if (data?.length > 29) {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [containerRef, options, data]);
  
    useEffect(() => {
      if (isVisible) {
        handleFetchDataNextPage();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [isVisible]);

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

      <div ref={containerRef} style={{ height: "20px" }}></div>
    </>
    )
}

export default ImgContainer
