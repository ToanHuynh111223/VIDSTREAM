import styles from "./PricingPlan.module.scss"
import clsx from "clsx";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from '../../hooks/useColorMaterial';
function PricingPlan() {
    const loginColor = useColorMaterial('login')
    return (
        <div style={{ padding: "0 1.5rem", margin: "0 8.1rem" }}>
            <div style={{ backgroundColor: "#000", width: "100%", padding: "2.5rem", borderRadius: "1rem", overflow: "auto" }}>

                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ padding: "1.2rem", width: "14%" }}></th>
                            <th style={{ padding: "1.2rem", width: "20%" }}>
                                <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0 0 40px 40px", position: "relative" }}>
                                    <div style={{ paddingTop: "2.4rem", marginBottom: "0.8rem", fontSize: "3rem", fontWeight: 700, fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
                                        $15
                                        <small style={{ fontSize: "2rem", fontWeight: 500 }}> / Per month</small>
                                    </div>
                                    <span className={clsx(styles.typePricingResponsive)} style={{ width: "50%", color: "#fff", fontSize: "1.8rem", fontWeight: 700, padding: "1rem 2.5rem", backgroundColor: "#e50914", borderRadius: "0 0 20px 20px", position: "absolute", left: "27%", top: "-1.5rem" }}>Starter</span>
                                </div>
                            </th>

                            <th style={{ padding: "1.2rem", width: "20%" }}>
                                <div style={{ padding: "1.5rem", backgroundColor: "#e50914", borderRadius: "0 0 40px 40px", position: "relative" }}>
                                    <div style={{ color: "#fff", paddingTop: "2.4rem", marginBottom: "0.8rem", fontSize: "3rem", fontWeight: 700, fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
                                        $30
                                        <small style={{ fontSize: "2rem", fontWeight: 500 }}> / Per month</small>
                                    </div>
                                    <span className={clsx(styles.typePricingResponsive)} style={{ width: "60%", color: "#e50914", fontSize: "1.8rem", fontWeight: 700, padding: "1rem 2.5rem", backgroundColor: "#fff", borderRadius: "0 0 20px 20px", position: "absolute", left: "20%", top: "-1.5rem", }}>Standard</span>
                                </div>
                            </th>

                            <th style={{ padding: "1.2rem", width: "20%" }}>
                                <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0 0 40px 40px", position: "relative" }}>
                                    <div style={{ paddingTop: "2.4rem", marginBottom: "0.8rem", fontSize: "3rem", fontWeight: 700, fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
                                        $99
                                        <small style={{ fontSize: "2rem", fontWeight: 500 }}> / Per month</small>
                                    </div>
                                    <span className={clsx(styles.typePricingResponsive)} style={{ width: "70%", color: "#fff", fontSize: "1.8rem", fontWeight: 700, padding: "1rem 2.5rem", backgroundColor: "#e50914", borderRadius: "0 0 20px 20px", position: "absolute", left: "14%", top: "-1.5rem" }}>Professional</span>
                                </div>
                            </th>

                            <th style={{ padding: "1.2rem", width: "20%" }}>
                                <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "0 0 40px 40px", position: "relative" }}>
                                    <div style={{ paddingTop: "2.4rem", marginBottom: "0.8rem", fontSize: "3rem", fontWeight: 700, fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
                                        $150
                                        <small style={{ fontSize: "2rem", fontWeight: 500 }}> / Per month</small>
                                    </div>
                                    <span className={clsx(styles.typePricingResponsive)} style={{ width: "60%", color: "#fff", fontSize: "1.8rem", fontWeight: 700, padding: "1rem 2.5rem", backgroundColor: "#e50914", borderRadius: "0 0 20px 20px", position: "absolute", left: "21%", top: "-1.5rem" }}>Premium</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem 0", width: "15rem", borderBottom: "1px solid #222" }}>
                                New Movies
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                Custom Request
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CloseIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                Popular Tv Shows
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CloseIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                Hollywood Movies
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                Video Quality
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222", fontFamily: "Roboto, sans-serif", fontSize: "1.6rem", fontWeight: 500 }}>SD (480p)</th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222", fontFamily: "Roboto, sans-serif", fontSize: "1.6rem", fontWeight: 500 }}>HD (720p) </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222", fontFamily: "Roboto, sans-serif", fontSize: "1.6rem", fontWeight: 500 }}>HD (1080p 4k)</th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222", fontFamily: "Roboto, sans-serif", fontSize: "1.6rem", fontWeight: 500 }}>HD (1080p 8k)</th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                No Ad Entertainment
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CloseIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#e50914", textAlign: "center", borderBottom: "1px solid #222" }}><CloseIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}><CheckIcon sx={{ fontSize: 35 }} /></th>

                        </tr>
                        <tr>
                            <th style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 600, padding: "1.2rem 0 1.2rem", width: "15rem", borderBottom: "1px solid #222" }}>
                                x
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" sx={{ fontSize: 15 }} color={loginColor} > buy now </Button>
                                </ThemeProvider>
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" sx={{ fontSize: 15 }} color={loginColor} > buy now </Button>
                                </ThemeProvider>
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" sx={{ fontSize: 15 }} color={loginColor} > buy now  </Button>
                                </ThemeProvider>
                            </th>
                            <th style={{ padding: "1.2rem", width: "24rem", color: "#fff", textAlign: "center", borderBottom: "1px solid #222" }}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" sx={{ fontSize: 15 }} color={loginColor} > buy now  </Button>
                                </ThemeProvider>
                            </th>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default PricingPlan;