import styles from "./Parallex.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
//import grid boostrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import icon mui
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";
function Parallex() {
  const loginColor = useColorMaterial("login");
  return (
    <div className={clsx(styles.parallex)} style={{ margin: " 4rem 0" }}>
      <div className={clsx(styles.content)}>
        <Row>
          <Col lg={4} xl={4}>
            <h1>AVATAR</h1>
            <div
              style={{
                display: "flex",
                color: "#DC0000",
                zIndex: "999",
                position: "relative",
                margin: "1.6rem 0",
              }}
            >
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarBorderIcon fontSize="large" />
            </div>
            <div style={{ display: "flex", marginBottom: "1.6rem" }}>
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.4rem",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "0.8rem",
                  backgroundColor: "#6c757d",
                  borderRadius: "0.8rem",
                  zIndex: "999",
                  position: "relative",
                }}
              >
                100+
              </span>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.8rem",
                  color: "#fff",
                  fontWeight: 500,
                  margin: "0 0 0 1.6rem",
                  lineHeight: "3.7rem",
                  zIndex: "999",
                  position: "relative",
                }}
              >
                3h 10m
              </p>
            </div>
            <p
              style={{
                marginBottom: "1rem",
                color: "#faebd7b0",
                fontSize: "1.6rem",
                fontWeight: 500,
                zIndex: "999",
                position: "relative",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <Link
              style={{
                textDecoration: "none",
                zIndex: "999",
                position: "relative",
              }}
            >
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  fontSize="small"
                  color={loginColor}
                  style={{
                    color: "#fff",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    borderRadius: "3rem",
                    marginTop: "1rem",
                  }}
                >
                  <PlayArrowIcon
                    style={{ marginRight: "0.2rem" }}
                    sx={{ fontSize: 25 }}
                  />
                  play now
                </Button>
              </ThemeProvider>
            </Link>{" "}
          </Col>
          <Col>
          <img src="https://themes.themewild.com/vidstream/assets/images/parallax/p1.jpg" alt="avatar" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Parallex;
