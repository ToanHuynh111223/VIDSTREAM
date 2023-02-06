import styles from "./MovieDetails.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Fragment } from "react";
import Iframe from "react-iframe";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../hooks/useColorMaterial";
//import icon mui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function MovieDetails() {
  const dataMovies = useAxios("https://www.mockly.app/api/7a35590a-0724-43d0-b7f4-bd1799be185a/movies", "GET");
  const dataActionMovies = useAxios("https://www.mockly.app/api/7a35590a-0724-43d0-b7f4-bd1799be185a/actionMovies", "GET");
  const dataComedyMovies = useAxios("https://www.mockly.app/api/7a35590a-0724-43d0-b7f4-bd1799be185a/comedyMovies", "GET");
  const data = [...dataMovies, ...dataActionMovies, ...dataComedyMovies ]
  const namePath = useParams();
  const loginColor = useColorMaterial("login");
  return (
    <Container>
      {data
        .filter((movie) => {
          return `${movie.name}${movie.id}` === namePath.name;
        })
        .map((movie, index) => {
          return (
            <Fragment key={index}>
              <div style={{ height: "50rem", width: "100%" }}>
                <Iframe
                  url={movie.trailer}
                  width="100%"
                  height="100%"
                  display="block"
                  position="relative"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              <div className={clsx(styles.content)}>
                <h1>{movie.name}</h1>
                <p style={{ color: "#fff", fontWeight: 500 }}>
                  {movie.content}
                </p>
                <p>
                  Actor: <span>{movie.actor}</span>
                </p>
                <p>
                  Genres: <span>{movie.genres}</span>
                </p>
                <p>
                  Director: <span>{movie.director}</span>
                </p>
                <p>
                  Duration: <span>{movie.duration}</span>
                </p>
                <p>
                  Quality:{" "}
                  <span
                    style={{
                      padding: "0.4rem",
                      backgroundColor: "#dc3545",
                      borderRadius: "0.4rem",
                    }}
                  >
                    {movie.quality}
                  </span>
                </p>
                <Link style={{ textDecoration: "none" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      fontSize="small"
                      color={loginColor}
                      style={{
                        color: "#fff",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        borderRadius: "3rem",
                        marginTop: "2.4rem"
                      }}
                    >
                      <PlayArrowIcon
                        style={{ marginRight: "0.2rem" }}
                        sx={{ fontSize: 20 }}
                      />
                      Watch Now
                    </Button>
                  </ThemeProvider>
                </Link>
              </div>
            </Fragment>
          );
        })}
    </Container>
  );
}

export default MovieDetails;
