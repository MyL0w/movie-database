import {StyledWrapper} from "./SearchedResults.styled";
import {ResultItem} from "../ResultItem/ResultItem";
import {SearchResultItem} from "../../services/types";

type SearchedResultsType = {
    data: SearchResultItem[]
}
export const SearchedResults = ({data}: SearchedResultsType) => {
    return (
        <StyledWrapper>
            {data.map(({
                           Title,
                           Year,
                           imdbID,
                           Type,
                           Poster
                       },
                       index) => (
                <ResultItem key={index} {...{Title, Year, imdbID, Type, Poster}}/>
            ))}
        </StyledWrapper>
    );
};
