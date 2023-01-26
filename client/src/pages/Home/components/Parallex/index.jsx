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
    <div className={clsx(styles.parallex)}>
      <div className={clsx(styles.content)}>
        <Row>
          <Col lg={4} xl={4}>
            <h1>AVATAR</h1>
            <div className={clsx(styles.rate)}>
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarBorderIcon fontSize="large" />
            </div>
            <div className={clsx(styles.info)}>
              <span className={clsx(styles.badge)}>100+</span>
              <p className={styles.duration}>3h 10m</p>
            </div>
            <p className={clsx(styles.introduction)}>
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
          <Col className={clsx(styles.colRight)}>
            <img
              src="https://themes.themewild.com/vidstream/assets/images/parallax/p1.jpg"
              alt="avatar"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Parallex;
