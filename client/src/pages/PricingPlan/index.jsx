import styles from "./PricingPlan.module.scss";
import clsx from "clsx";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../hooks/useColorMaterial";
function PricingPlan() {
  const loginColor = useColorMaterial("login");
  return (
    <div className={clsx(styles.pricingPlan)}>
      <div className={clsx(styles.wrapper)}>
        <table className={clsx(styles.table)}>
          <thead>
            <tr>
              <th className={clsx(styles.theadColumnOne)}></th>
              <th className={clsx(styles.theadColumnTwo)}>
                <div className={clsx(styles.content)}>
                  <div className={clsx(styles.cost)}>
                    $15
                    <small> / Per month</small>
                  </div>
                  <span
                    className={clsx(
                      styles.typePricing,
                      styles.typePricingResponsive
                    )}
                  >
                    Starter
                  </span>
                </div>
              </th>

              <th className={clsx(styles.theadColumnTwo)}>
                <div
                  className={clsx(styles.content)}
                  style={{
                    backgroundColor: "#e50914",
                  }}
                >
                  <div className={clsx(styles.cost)} style={{ color: "#fff" }}>
                    $30
                    <small> / Per month</small>
                  </div>
                  <span
                    className={clsx(
                      styles.typePricing,
                      styles.typePricingResponsive
                    )}
                    style={{
                      width: "60%",
                      color: "#e50914",
                      fontSize: "1.8rem",
                      backgroundColor: "#fff",
                      left: "20%",
                      top: "-1.5rem",
                    }}
                  >
                    Standard
                  </span>
                </div>
              </th>

              <th className={clsx(styles.theadColumnTwo)}>
                <div className={clsx(styles.content)}>
                  <div className={clsx(styles.cost)}>
                    $99
                    <small> / Per month</small>
                  </div>
                  <span
                    className={clsx(
                      styles.typePricing,
                      styles.typePricingResponsive
                    )}
                    style={{
                      width: "70%",
                      position: "absolute",
                      left: "14%",
                      top: "-1.5rem",
                    }}
                  >
                    Professional
                  </span>
                </div>
              </th>

              <th className={clsx(styles.theadColumnTwo)}>
                <div className={clsx(styles.content)}>
                  <div className={clsx(styles.cost)}>
                    $150
                    <small> / Per month</small>
                  </div>
                  <span
                    className={clsx(
                      styles.typePricing,
                      styles.typePricingResponsive
                    )}
                    style={{
                      width: "60%",
                      left: "21%",
                      top: "-1.5rem",
                    }}
                  >
                    Premium
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>New Movies</th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  color: "#e50914",
                }}
              >
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>Custom Request</th>
              <th className={clsx(styles.textCenter)}>
                <CloseIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  color: "#e50914",
                }}
              >
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>Popular Tv Shows</th>
              <th className={clsx(styles.textCenter)}>
                <CloseIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  color: "#e50914",
                }}
              >
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                style={{
                  padding: "1.2rem",
                  width: "24rem",
                  color: "#fff",
                  textAlign: "center",
                  borderBottom: "1px solid #222",
                }}
              >
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>Hollywood Movies</th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  color: "#e50914",
                }}
              >
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>Video Quality</th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1.6rem",
                }}
              >
                SD (480p)
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  fontSize: "1.6rem",
                  fontFamily: "Roboto, sans-serif",
                  color: "#e50914"
                }}
              >
                HD (720p){" "}
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  fontSize: "1.6rem",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                HD (1080p 4k)
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  fontSize: "1.6rem",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                HD (1080p 8k)
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>No Ad Entertainment</th>
              <th className={clsx(styles.textCenter)}>
                <CloseIcon sx={{ fontSize: 35 }} />
              </th>
              <th
                className={clsx(styles.textCenter)}
                style={{
                  color: "#e50914",
                }}
              >
                <CloseIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
              <th className={clsx(styles.textCenter)}>
                <CheckIcon sx={{ fontSize: 35 }} />
              </th>
            </tr>
            <tr>
              <th className={clsx(styles.tbodyLeft)}>x</th>
              <th className={clsx(styles.textCenter)}>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    sx={{ fontSize: 15 }}
                    color={loginColor}
                  >
                    {" "}
                    buy now{" "}
                  </Button>
                </ThemeProvider>
              </th>
              <th className={clsx(styles.textCenter)}>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    sx={{ fontSize: 15 }}
                    color={loginColor}
                  >
                    {" "}
                    buy now{" "}
                  </Button>
                </ThemeProvider>
              </th>
              <th className={clsx(styles.textCenter)}>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    sx={{ fontSize: 15 }}
                    color={loginColor}
                  >
                    {" "}
                    buy now{" "}
                  </Button>
                </ThemeProvider>
              </th>
              <th className={clsx(styles.textCenter)}>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    sx={{ fontSize: 15 }}
                    color={loginColor}
                  >
                    {" "}
                    buy now{" "}
                  </Button>
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
