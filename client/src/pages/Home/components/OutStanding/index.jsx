import styles from "./OutStanding.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./main.scss";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import required modules
import { Pagination, Navigation } from "swiper";
//import icon mui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
//import useAxios
import useAxios from "../../../../hooks/useAxios";
function OutStanding() {
  const data = useAxios("http://localhost:8000/movies", "GET");
  const loginColor = useColorMaterial("login");
  return (
    <div className={clsx(styles.outStanding)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((menu, index) => {
          return (
            menu.isOutStanding && (
              <SwiperSlide key={index}>
                <div className={clsx(styles.wrapper)}>
                  <div className={clsx(styles.overlay)}></div>
                  <img src={menu.img} alt={menu.name} />
                  <div className={clsx(styles.content)}>
                    <h1>{menu.name.toUpperCase()}</h1>
                    <span className={clsx(styles.duration)}>
                      {menu.duration}
                    </span>
                    <p>{menu.content}</p>
                    <Link
                      to={`/movie-details/${menu.name}`}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <ThemeProvider theme={theme}>
                        <Button
                          variant="contained"
                          size="large"
                          color={loginColor}
                          style={{
                            color: "#fff",
                            fontSize: "1.6rem",
                            fontWeight: 600,
                            borderRadius: "3rem",
                          }}
                        >
                          <PlayArrowIcon
                            style={{ marginRight: "0.4rem" }}
                            sx={{ fontSize: 25 }}
                          />
                          Play Now
                        </Button>
                      </ThemeProvider>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </div>
  );
}

export default OutStanding;
