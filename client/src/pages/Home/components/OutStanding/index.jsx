import styles from "../../Home.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./main.scss";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import useAxios
import useAxios from "../../../../hooks/useAxios"
function OutStanding() {
    const data = useAxios("http://localhost:8000/movies", 'GET')
    const loginColor = useColorMaterial('login')
    return (
        <div className={clsx(styles.outStanding)}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >{

                    data.map((menu, index) => {
                        return (menu.isOutStanding &&
                            <SwiperSlide key={index}>
                                <div style={{ height: "60rem ", position: "relative" }}>
                                    <div className={clsx(styles.overlay)} style={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 0.8) 35%, rgba(83, 100, 141, 0) 100%)" }}></div>
                                    <img style={{ width: "100%", height: "100%" }} src={menu.img} alt={menu.name} />
                                    <div className={clsx(styles.content)} style={{ position: "absolute", top: "25%", width: "100%", padding: "0 10rem" }} >
                                        <h1 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "6rem", color: "#e50914", fontWeight: 700, margin: "1.6rem 0" }}>{menu.name.toUpperCase()}</h1>
                                        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.4rem", color: "#fff", fontWeight: 600, padding: "0.8rem", backgroundColor: "#6c757d", borderRadius: "0.8rem" }}>{menu.duration}</span>
                                        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.6rem", color: "#d1d0cf", fontWeight: 400, margin: "1.6rem 0", maxWidth: "35%" }}>{menu.content}</p>
                                        <Link style={{ textDecoration: "none" }}>   <ThemeProvider theme={theme}>
                                            <Button variant="contained" size="large" color={loginColor} style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 600, borderRadius: "3rem" }} >
                                                <PlayArrowIcon style={{ marginRight: "0.4rem" }} sx={{ fontSize: 25 }} />
                                                Play Now
                                            </Button>
                                        </ThemeProvider></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default OutStanding;