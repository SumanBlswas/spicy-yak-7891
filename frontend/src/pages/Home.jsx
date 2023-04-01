import React from "react";
// import Footer from "../components/footer/Footer";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Men from "./Men";
import Women from "./Women";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Box, Center } from "@chakra-ui/react";

const Home = () => {
  const [flag, setFlag] = React.useState(false);
  console.log(flag)
  return (
    <div>
      {" "}
      <div className={styles.main_container}>
        {/* <div className={styles.nav}>
          <Navbar />
        </div> */}
        <Center>
          <Box pt='36'>
            <Box className={styles.men_women} diplay="flex" textAlign='start' ml='-8'>
              <button disabled={flag===true} onClick={() => setFlag(!flag)} >
                WOMEN
              </button>
              {" | "}
              <button disabled={flag === false} onClick={() => setFlag(!flag)}>
                MEN
              </button>
            </Box>
            <div>{flag ? <Women /> : <Men />}</div>
          </Box>
        </Center>
      </div>
      {/* <footer className={flag ? styles.FooterWomen:styles.Footer_Section}>
        <Footer/>
      </footer> */}
    </div>
  );
};

export default Home;
