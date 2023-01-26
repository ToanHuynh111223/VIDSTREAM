import styles from "./SearchMovies.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";
//import icon mui
import SearchIcon from "@mui/icons-material/Search";
function SearchMovies() {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className={clsx(styles.searchMovies)}>
      <form action="" className={clsx(styles.searchForm)}>
        <input type="text" placeholder="Search" autoComplete="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <Link to={`/search?q=${searchTerm}`}>
          <SearchIcon sx={{ fontSize: 30 }} />
        </Link>
      </form>
    </div>
  );
}

export default SearchMovies;
