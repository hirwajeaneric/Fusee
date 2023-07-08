import React, { useContext } from "react";
import { SearchForm2 as SearchFormStyles, CustomInputField1 } from '../styles/GeneralStyledComponents';
import { ScrollContext } from "../App";

export default function SearchFormTwo() {
    const { showSearchForm } = useContext(ScrollContext);
    const [searchData, setSearchData] = React.useState({
        name: '',
        location: '',
    })

    const handleSearchData = ({currentTarget: input}) => {
        setSearchData({...searchData, [input.name]: input.value});
    }

    const Search = (e) => {
        e.preventDefault();

    }

    return (
        <SearchFormStyles onSubmit={Search}>
            <CustomInputField1 
                type="text" 
                id="name" 
                name="name"
                value={searchData.name} 
                placeholder="Search by name" 
                onChange={handleSearchData} 
                style={{ 
                    borderRight: '1px solid gray',
                    width: showSearchForm && '170px',
                }}
            />
            <CustomInputField1 
                type="text" 
                id="location" 
                name="location"
                value={searchData.location} 
                placeholder="Search by location" 
                onChange={handleSearchData}
                style={{ 
                    borderRight: '1px solid gray',
                    width: showSearchForm && '170px',
                }}
            />
            <CustomInputField1 
                type='submit'
                value='Search'
            />
        </SearchFormStyles>
    )
}
