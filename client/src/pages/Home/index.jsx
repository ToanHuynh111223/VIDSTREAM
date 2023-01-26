// import styles from "./Home.module.scss";
// import clsx from "clsx";

import OutStanding from "./components/OutStanding";
import ActionMovie from "./components/ActionMovie";
import ComedyMovie from "./components/ComedyMovie";
import Parallex from "./components/Parallex";
import { SearchMovies } from "../../components";
function Home() {

    return (
        <>
            <OutStanding />
            <SearchMovies/>
            <ActionMovie />
            <ComedyMovie />
            <Parallex />
        </>
    );
}

export default Home;