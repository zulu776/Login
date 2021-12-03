import React, { useState } from "react";

//Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm"
import VidContainer from "../../Components/Containers/VidContainer";

const VideosSearch = () => {

    const [videos, setVideos] = useState("");
    const [data, setData] = useState(null);
    const [nextPage, setNextPage] = useState("");

    //Funcion
    const handleKeyword = ({ value }) => setVideos(value);
    const handleSearchData = async e => {
        e.preventDefault();
        const request = await fetch(
        `https://api.pexels.com/videos/search?query=${videos}&per_page=30`,
        {
            headers: {
            Authorization:
                "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
            }
        }
        );
        const result = await request.json();
        setData(result.videos);
        setNextPage(result.next_page);
    };

    const handleFetchDataNextPage = async () => {
        const request = await fetch(nextPage, {
          headers: {
            Authorization:
              "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
          }
        });
        const result = await request.json();
        setNextPage(result.next_page);
        setData([...data, ...result.videos]);
      };

    return (
        <div className="w-3/4 m-auto">
            <SearchForm
            handleKeyword={handleKeyword}
            handleSearchData={handleSearchData}
            />
            <VidContainer 
            data={data} 
            title="Videos" 
            handleFetchDataNextPage={handleFetchDataNextPage} 
            />
        </div>
    )
}

export default VideosSearch
