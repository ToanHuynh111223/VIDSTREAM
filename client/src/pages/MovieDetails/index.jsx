import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Fragment } from "react";
import Iframe from "react-iframe";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
function MovieDetails() {
  const data = useAxios("http://localhost:8000/movies", "GET");
  const namePath = useParams();
  return (
    <Container>
      {data
        .filter((movie) => {
          return movie.name === namePath.name;
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
            </Fragment>
          );
        })}
    </Container>
  );
}

export default MovieDetails;
