import React, { useState } from "react";

//Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ImgContainer from "../../Components/Containers/ImgContainer";

const Images = () => {

    const [images, setImages] = useState("");
    const [data, setData] = useState(null);

    //Funcion
    const handleKeyword = ({ value }) => setImages(value);
    const handleSearchData = async e => {
        e.preventDefault();
        const request = await fetch(
        `https://api.pexels.com/v1/search?query=${images}&per_page=20`,
        {
            headers: {
            Authorization:
                "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
            }
        }
        );
        const result = await request.json();
        setData(result);
    };

    return (
        <div className="w-3/4 m-auto">
            <SearchForm
            handleKeyword={handleKeyword}
            handleSearchData={handleSearchData}
            />
            <ImgContainer data={data?.photos} title="Images" />
        </div>
    )
}

export default Images
