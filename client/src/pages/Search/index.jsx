import clsx from "clsx";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { SearchMovies } from "../../components";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
//import layout bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//add hooks theme mui
import useColorMaterial, { theme } from "../../hooks/useColorMaterial";
//import icon mui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ReactPaginate from "react-paginate";
function Search() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const dataMovies = useAxios("http://localhost:8000/movies", "GET");
  const dataActionMovies = useAxios(
    "http://localhost:8000/actionMovies",
    "GET"
  );
  const dataComedyMovies = useAxios(
    "http://localhost:8000/comedyMovies",
    "GET"
  );
  const data = [...dataMovies, ...dataActionMovies, ...dataComedyMovies];

  const loginColor = useColorMaterial("login");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    data.filter((movie) => {
      return movie.name.toUpperCase().search(q.toUpperCase()) >= 0;
    }).length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={clsx(styles.search)}>
      <SearchMovies />
      <Container>
        <div style={{ display: "flex" }}>
          <h1 className={clsx(styles.title)}>Result: {q}</h1>
        </div>
        <Row>
          {data
            .filter((movie) => {
              return movie.name.toUpperCase().search(q.toUpperCase()) >= 0;
            })
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((movie, index) => {
              return (
                <Col key={index}>
                  <div className={clsx(styles.filmItem)}>
                    <img src={movie.img} alt={movie.name} />
                    <div className={clsx(styles.wrapper)}>
                      <h2 title={movie.name}>{movie.name}</h2>
                      <div className={clsx(styles.content)}>
                        <span className={clsx(styles.age)}>{movie.age}</span>
                        <p className={clsx(styles.duration)}>
                          {movie.duration}
                        </p>
                      </div>
                      <Link
                        to={`/movie-details/${movie.name}${movie.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ThemeProvider theme={theme}>
                          <Button
                            variant="contained"
                            fontSize="small"
                            color={loginColor}
                            style={{
                              color: "#fff",
                              fontSize: "1.2rem",
                              fontWeight: 600,
                              borderRadius: "3rem",
                            }}
                          >
                            <PlayArrowIcon
                              style={{ marginRight: "0.2rem" }}
                              sx={{ fontSize: 20 }}
                            />
                            Play Now
                          </Button>
                        </ThemeProvider>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Container>
    </div>
  );
}

export default Search;
