import {
    StyledContainerTitle,
    StyledResultImage,
    StyledShadow,
    StyledTitle,
    StyledTitleYear,
    StyledWrapper
} from "./ResultItem.styled";
import {SearchResultItem} from "../../services/types";
import {MOVIE_PLACEHOLDER} from "./ResultItem.constants";
import {Link} from "react-router-dom";

export const ResultItem = ({Title, Year, imdbID, Type, Poster}: SearchResultItem) => {
    // Poster = Poster === "N/A" ? MOVIE_PLACEHOLDER : Poster;
    const toLink = `/details?imdbID=${imdbID}`;
    return (
        <StyledWrapper>
            <Link to={toLink}>
                <StyledShadow/>
                <StyledResultImage src={Poster}/>
                <StyledContainerTitle>
                    <StyledTitle>
                        {Title}
                    </StyledTitle>
                    <StyledTitleYear>
                        {Year}
                    </StyledTitleYear>
                </StyledContainerTitle>
            </Link>
        </StyledWrapper>
    )
}
