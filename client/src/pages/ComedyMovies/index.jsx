import styles from "./ComedyMovies.module.scss"
import clsx from "clsx"
import {Link} from "react-router-dom"
import { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import icon mui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, {theme} from "../../hooks/useColorMaterial";
//import useAxios
import useAxios from "../../hooks/useAxios";
import ReactPaginate from "react-paginate";
function ComedyMovies() {
    const data = useAxios("https://www.mockly.app/api/7a35590a-0724-43d0-b7f4-bd1799be185a/comedyMovies", "GET");
    const loginColor = useColorMaterial("login");
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 20;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
    return ( 
        <div className={clsx(styles.comedyMovie)} style={{ margin: " 4rem 0" }}>
      <Container>
        <Row>
          {data
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

export default ComedyMovies;