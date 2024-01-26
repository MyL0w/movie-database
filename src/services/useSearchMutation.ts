import {useQuery} from "react-query";

type SearchProps = {
    searchedText: string,
    // onError: (err: unknown) => void,
    // onSuccess: (data: any) => void,
}

const API_KEY = process.env.REACT_APP_OMBDD_API_KEY;
const fetchMovieList = async (searchText: any) => {
    const res = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`);
    return res.json()

}
export const useSearch = (searchedText: string) => {
    return useQuery(['movies', searchedText], fetchMovieList);
}
