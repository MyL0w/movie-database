import {useQuery} from "react-query";
import {API_KEY} from "./constants";

export const useMovieDetails = (imdbID: string) => {
    return useQuery(['movieDetails', imdbID], async () => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
        return res.json();
    });
}
