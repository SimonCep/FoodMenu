import React from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import Navbar from './components/NavBar/navBar';
import Sidebar from './components/SideBar/sideBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <SearchBar />
      </main>
    </div>
  )
};

export default App;
