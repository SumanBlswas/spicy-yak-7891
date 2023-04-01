import React from "react";
// import Footer from "../components/footer/Footer";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Men from "./Men";
import Women from "./Women";
import { Footer } from "../components/footer/Footer";

const Home = () => {
  const [flag, setFlag] = React.useState(false);
  console.log(flag)
  return (
    <div>
      {" "}
      <div className={styles.main_container}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.home_container}>
          <div className={styles.men_women}>
            <button disabled={flag===true} onClick={() => setFlag(!flag)}>
              WOMEN
            </button>
            {" | "}
            <button disabled={flag === false} onClick={() => setFlag(!flag)}>
              MEN
            </button>
          </div>
          <div>{flag ? <Women /> : <Men />}</div>
        </div>
      </div>
      <footer className={flag ? styles.FooterWomen:styles.Footer_Section}>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
