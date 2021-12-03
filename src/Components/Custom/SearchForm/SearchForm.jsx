import React from "react";

const SearchForm = ({ handleKeyword, handleSearchData }) => {
    return (
        <form className="w-1/2 m-auto mt-5 mb-5 tablet:flex tablet:flex-col tablet:items-center" onSubmit={handleSearchData}>
            <input
            type="text"
            className="w-3/4 tablet:w-52 px-3 py-3 outline-none border border-black search-input"
            placeholder="Search image by keyword"
            onChange={({ target }) => handleKeyword(target)}
            />
            <input
            type="submit"
            value="Search"
            className="w-1/4 tablet:w-52 bg-black px-3 py-3 border border-black text-white"
            />
      </form>
    )
}

export default SearchForm
