import React from 'react'
import "./Search.scss"

function Search() {
  return (
    <div className='search-con'>
        <img src="/images/search.svg" alt="search" />
        <input type="search" placeholder='Search song' />
    </div>
  )
}

export default Search