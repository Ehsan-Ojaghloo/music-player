import React from 'react'
import "./App.scss"
import Header from './layouts/Header'
import Search from './components/Search'

function App() {
  return (
    <div className='main-con'>
      <Header className='header-com'/>
      <Search className='search-com'/>
    </div>
  )
}

export default App