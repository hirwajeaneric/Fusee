import React, { useContext } from "react";
import { SearchForm as SearchFormStyles, CustomTextField, CustomMaterialUiButton } from '../styles/GeneralStyledComponents';
import { ScrollContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
    const navigate = useNavigate();
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
        
        navigate('/search');
    }

    return (
        <SearchFormStyles onSubmit={Search}>
            <CustomTextField 
                type="text" 
                id="name" 
                variant="outlined" 
                name="name"
                size='small' 
                value={searchData.name} 
                placeholder="Search by name" 
                onChange={handleSearchData} 
                style={{ 
                    background: 'white', 
                    borderRadius: '5px', 
                    width: showSearchForm && '170px',
                }}
            />
            <CustomTextField 
                type="text" 
                id="location" 
                variant="outlined" 
                name="location"
                size='small' 
                value={searchData.location} 
                placeholder="Search by location" 
                onChange={handleSearchData}
                style={{ 
                    background: 'white', 
                    borderRadius: '5px', 
                    width: showSearchForm && '170px',
                }}
            />
            <CustomMaterialUiButton type='submit' variant="contained">Search</CustomMaterialUiButton>
        </SearchFormStyles>
    )
}
