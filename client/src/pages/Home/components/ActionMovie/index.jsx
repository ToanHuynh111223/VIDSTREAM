import { Link } from "react-router-dom";
import styles from "./ActionMovie.module.scss";
import clsx from "clsx";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import icon mui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";
//import useAxios
import useAxios from "../../../../hooks/useAxios";
function ActionMovie() {
  const data = useAxios("http://localhost:8000/movies", "GET");
  const loginColor = useColorMaterial("login");
  return (
    <div className={clsx(styles.actionMovie)} style={{ margin: " 4rem 0" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.6rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <MovieFilterIcon sx={{ fontSize: 40, color: "#e50914" }} />
            <h1
              style={{
                color: "#fff",
                fontSize: "3rem",
                fontWeight: 700,
                margin: "0 0 0 0.4rem",
                lineHeight: "4rem",
              }}
            >
              Action Movies
            </h1>
          </div>
          <Link className={clsx(styles.viewAll)}>View all</Link>
        </div>
        <Row>
          {data
            .filter((movie) => movie.isActionMovies)
            .map((movie, index) => {
              return (
                index <= 10 && (
                  <Col key={index}>
                    <div className={clsx(styles.filmItem)}>
                      <img src={movie.img} alt={movie.name} />
                      <div style={{ padding: "1.6rem", width: "100%" }}>
                        <h2 title={movie.name}>{movie.name}</h2>
                        <div
                          style={{
                            display: "flex",
                            fontFamily: "'Roboto', sans-serif",
                            marginBottom: "2rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.2rem",
                              color: "#fff",
                              fontWeight: 600,
                              padding: "0.6rem",
                              backgroundColor: "#e50914",
                              borderRadius: "0.8rem",
                            }}
                          >
                            {movie.age}
                          </span>
                          <p
                            style={{
                              fontSize: "1.6rem",
                              color: "#fff",
                              fontWeight: 500,
                              margin: "0 0 0 1.6rem",
                              lineHeight: "3.7rem",
                            }}
                          >
                            {movie.duration}
                          </p>
                        </div>
                        <Link style={{ textDecoration: "none" }}>
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
                )
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default ActionMovie;
