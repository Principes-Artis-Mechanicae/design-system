import { ComponentProps } from "react";

import searchIcon from "../../assets/search.svg";

import { SearchInput, SearchBarWrapper, SearchIcon, SearchIconContainer } from "./SearchBar.style";

export interface ISearchBar extends ComponentProps<"input"> {
    width: string;
}

export const SearchBar: React.FC<ISearchBar> = ({ width, ...rest }) => {
    return (
        <SearchBarWrapper width={width}>
            <SearchInput type="text" {...rest} />
            <SearchIconContainer>
                <SearchIcon src={searchIcon} />
            </SearchIconContainer>
        </SearchBarWrapper>
    );
};
