import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/searchBar"

function Home(){
    return(
        <div className="home">
            <SearchBar/>
            <Filter/>
        </div>
    )
}

export default Home;