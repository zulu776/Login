import React, { useState, useEffect } from "react";

//Components
import VidContainer from "../../Components/Containers/VidContainer";

const VideosRandom = () => {

    const [data, setData] = useState(null);
    const [nextPage, setNextPage] = useState("");

    useEffect(() => {
        const query = ["nature", "office", "movies", "animals", "space"];
        const random = Math.floor(Math.random() * (query.length - 1)) + 1;
        const keyword = query[random];
        const handleFetchToken = async () => {
          const request = await fetch(
            `https://api.pexels.com/videos/search?query=${keyword}&per_page=30`,
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
        handleFetchToken();
      }, []);

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
        <div>
            <VidContainer 
            data={data} 
            title="Videos" 
            handleFetchDataNextPage={handleFetchDataNextPage}
            />
        </div>
    )
}

export default VideosRandom
