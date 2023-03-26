import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar/searchBar'
import Navbar from './components/NavBar/navBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SearchBar />
    </div>
  )
};

export default App;
