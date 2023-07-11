import React, { useContext } from "react";
import { SearchForm as SearchFormStyles, CustomTextField, CustomMaterialUiButton } from '../styles/GeneralStyledComponents';
import { ScrollContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SearchForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { showSearchForm } = useContext(ScrollContext);
    const [searchData, setSearchData] = React.useState({
        name: '',
        location: '',
    })

    const handleSearchData = ({currentTarget: input}) => {
        setSearchData({...searchData, [input.name]: input.value});
        console.log(searchData);
    }

    const Search = (e) => {
        e.preventDefault();

        if (searchData.name && searchData.location) {
            dispatch({type: 'user/manualSearch', payload: searchData.name });
            dispatch({type: 'booking/manualSearch', payload: searchData.location });
        } else if (searchData.name && !searchData.location) {
            dispatch({type: 'user/manualSearch', payload: searchData.name });
        } else if (!searchData.name && searchData.location) {
            dispatch({type: 'booking/manualSearch', payload: searchData.location });
        }

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
