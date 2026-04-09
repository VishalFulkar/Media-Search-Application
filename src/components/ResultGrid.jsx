import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {setLoading,setError,setResults} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector(
        (store) => store.search,
    );
    const dispatch = useDispatch();

    useEffect(
        function () {
            if(!query) return
            const getData = async () => {
                try {
                    dispatch(setLoading())
                    let data = [];
                    if (activeTab == "Photos") {
                        let response = await fetchPhotos(query);
                        data = response.results.map((item) => ({
                            id: item.id,
                            type: "photo",
                            title: item.alt_description,
                            thumbnail: item.urls.small,
                            src: item.urls.full,
                            url: item.links.html
                        }));
                    }
                    if (activeTab == "Videos") {
                        let response = await fetchVideos(query);
                        data = response.videos.map((item) => ({
                            id: item.id,
                            type: "video",
                            title: item.user.name || "video",
                            thumbnail: item.image,
                            src: item.video_files[0].link,
                            url:item.url
                        }));
                    }
                    if (activeTab == "GIF") {
                        let response = await fetchGif(query);
                        data = response.data.map((item) => ({
                            id: item.id,
                            type: item.type,
                            title: item.title,
                            thumbnail: item.images.preview_gif.url,
                            src: item.images.original.url,
                            url:item.url
                        }));
                    }
                    dispatch(setResults(data));
                } catch (err) {
                    dispatch(setError(err.message));
                }
            };
            getData();
        },
        [query, activeTab, dispatch],
    )
    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading.......</h1>

    return <div className="flex flex-wrap justify-between w-full gap-5 overflow-auto px-10">
        {results.map((item,idx)=>{
            return <div item={item} key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>;
};

export default ResultGrid;
