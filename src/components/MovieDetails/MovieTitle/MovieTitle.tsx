import {StyledTitle, StyledWrapper, StyledYear} from "./MovieTitle.styled";

type TitleProps = {
    Title: string,
    Year: string
}
export const MovieTitle = ({Title, Year}: TitleProps) => {
    return (
        <StyledWrapper>
            <StyledTitle>{Title}</StyledTitle>
            <StyledYear>({Year})</StyledYear>
        </StyledWrapper>
    )
}
