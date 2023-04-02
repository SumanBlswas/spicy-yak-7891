import React, { useEffect} from "react";
import styles from "./Navbar.module.css";
import { HiPencil } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import axios from "axios";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const toast = useToast();
  const navigate = useNavigate();

  const get = async () => {
    try {
      let data1 = await axios.get(
        "https://maroon-sea-urchin-tam.cyclic.app/users/account",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setData(data1.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, [data]);

  const logout = () => {
    localStorage.clear();
    toast({
      title: "Logout",
      description: `Logout Successful`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box pb="28" position={"fixed"} zIndex={"999"}>
      <Box className={styles.navbar_container}>
        <Box className={styles.first_box}>
          <Box id={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Box>
          <Box className={show ? styles.nav_menu_links : styles.nav_links}>
            <ul className={styles.ul_links}>
              <li>
                <Link to="/">Women</Link>
                <Box className={styles.women_menu}>
                  <Box id={styles.ethnic_wear}>
                    <button>Ethnic Wear</button>
                    <Text>Kurta Kurtis</Text>
                    <Text>Sarees</Text>
                    <Text>Ethnic Sets</Text>
                    <Text>Suits& Dress Materials</Text>
                    <Text>Lehengas</Text>
                    <Text>Blouses</Text>
                    <Text>Dupattas</Text>
                    <Text>Ethnic Dresses</Text>
                    <Text>Palazzos & Skirts</Text>
                    <Text>Shawls & Wraps</Text>
                    <Text>Cloaks & Abaya</Text>
                  </Box>
                  <Box id={styles.western_wear}>
                    <button>Western Wear</button>
                    <Text>Tops</Text>
                    <Text>Dresses</Text>
                    <Text>Tees</Text>
                    <Text>Shirts</Text>
                    <Text>Tunics</Text>
                    <Text>Jumpsuits</Text>
                    <Text>Sets</Text>
                    <Text>Kaftans</Text>
                    <Text>Jeans & Jeggings</Text>
                    <Text>Trousers & Pants</Text>
                    <Text>Shrugs</Text>
                  </Box>
                  <Box id={styles.sports}>
                    <button>Sports & Activewear</button>
                    <Text>Swims</Text>
                    <Text>Topwear</Text>
                    <Text>Bottomwear</Text>
                    <Text>Shoes</Text>
                    <button>Lingerie & Sleepwear</button>
                    <Text>Bra</Text>
                    <Text>Panties</Text>
                    <Text>Lingerie</Text>
                    <Text>SleepWear</Text>
                    <button>Belts & Watches</button>
                    <br />
                    <br />
                    <button>Sunglasses & Hats</button>
                  </Box>
                  <Box id={styles.jeweller}>
                    <button>Jewellery</button>
                    <Text>Fashion Jewellery</Text>
                    <Text>lmitation Jewellery</Text>
                    <Text>Earnings</Text>
                    <Text>Necklace & Pendants</Text>
                    <button>Footwear</button>
                    <Text>Flats</Text>
                    <Text>Heels</Text>
                    <Text>Casual Shoes</Text>
                    <Text>Flip Flops</Text>
                    <button>Beauty & Personal Care</button>
                  </Box>
                </Box>
              </li>
              <li>
                <Link to="/">Men</Link>
                <Box className={styles.women_menu}>
                  <Box id={styles.ethnic_wear}>
                    <button>Top Wear</button>
                    <Text>T-Shirts</Text>
                    <Text>Polo T Shirts</Text>
                    <Text>Casual Shirts</Text>
                    <Text>Formal Shirts</Text>
                    <Text>Suits & Blazers</Text>
                    <Text>Jackets</Text>
                    <Text>Sweaters & SweatShirts</Text>
                    <button>Bottom Wear</button>
                    <Text>Jeans</Text>
                    <Text>Casual Trousers</Text>
                    <Text>Formal Trousers</Text>
                    <Text>Joggers</Text>
                    <Text>Shorts</Text>
                  </Box>
                  <Box id={styles.western_wear}>
                    <button>Ethnic Wear</button>
                    <Text>Kurtas</Text>
                    <Text>Ethnic Wear Sets</Text>
                    <Text>Nehru Jackets</Text>
                    <Text>Ethnic Bottom Wear</Text>
                    <button>Sports Wear</button>
                    <Text>T-Shirts</Text>
                    <Text>Shorts</Text>
                    <Text>Track Pants</Text>
                    <Text>Track Suits</Text>
                    <button>Fragrances</button>
                  </Box>
                  <Box id={styles.sports}>
                    <button>Footwear</button>
                    <Text>Casual Shoes</Text>
                    <Text>Formal Shoes</Text>
                    <Text>Sports Shoes</Text>
                    <Text>Jutis And Mojans</Text>
                    <Text>Slippers & Sandals</Text>
                    <Text>Socks</Text>
                    <button>Belts,Bags & Wallets</button> <br />
                    <br />
                    <button>Watches</button>
                    <br />
                    <br />
                    <button>Sunglasses & Frames</button>
                  </Box>
                  <Box id={styles.jeweller}>
                    <button>Brands</button>
                    <Text>Arrow</Text>
                    <Text>US Polo Assn </Text>
                    <Text>Aeropostale</Text>
                    <Text>Campus Sutra</Text>
                    <Text>Ruggers</Text>
                    <Text>Canary London</Text>
                    <Text>Hang Up</Text>
                    <Text>Alcis</Text>
                  </Box>
                </Box>
              </li>
              <li>
                <Link to="/">Kids</Link>
                <Box className={styles.women_menu}>
                  <Box id={styles.ethnic_wear}>
                    <button>Boys</button>
                    <Text>T-Shirts</Text>
                    <Text>Shirts</Text>
                    <Text>Bottom Wear</Text>
                    <Text>Ethnic Wear</Text>
                    <Text>Sweater & Cardigans</Text>
                    <Text>Coats & Jackets</Text>
                    <Text>InnerWear & Nightwear</Text>
                    <Text>Twin Sets & Dungrees</Text>
                    <Text>Palazzos & Skirts</Text>
                    <Text>Shawls & Wraps</Text>
                    <Text>Cloaks & Abaya</Text>
                  </Box>
                  <Box id={styles.western_wear}>
                    <button>Girls</button>
                    <Text>Dresses & Frocks</Text>
                    <Text>Tees & Tops</Text>
                    <Text>Bottom Wear</Text>
                    <Text>Ethnic Wear</Text>
                    <Text>Sweater & Cardigans</Text>
                    <Text>Coats & Jackets</Text>
                    <Text>Twin Sets & Jump Suits</Text>
                    <Text>Innerwear & Nightwear</Text>
                  </Box>
                  <Box id={styles.sports}>
                    <button>Footwear</button>
                    <Text>Sandals & Floaters</Text>
                    <Text>Slippers & Flip Flops</Text>
                    <Text>Casual Shoes</Text>
                    <Text>Sports Shoes</Text>
                    <Text>Formal Shoes</Text>
                    <button>Accessories</button> <br />
                    <br />
                    <button>Bed & Bath</button>
                  </Box>
                  <Box id={styles.jeweller}>
                    <button>Brands</button>
                    <Text>Giny & Jony</Text>
                    <Text>US Polo Assn </Text>
                    <Text>Monte Carlo</Text>
                    <Text>Cherokee</Text>
                    <Text>Li'l Tomatoes</Text>
                    <Text>NewVin</Text>
                    <Text>Under Fourteen Only</Text>
                    <Text>Tales & Stories</Text>
                  </Box>
                </Box>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="*">offers</a>
              </li>
            </ul>
          </Box>
        </Box>
        <Box className={styles.second_box}>
          <ul className={styles.second_ul_links}>
            <li>
              <a
                href="*"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <HiPencil className={styles.icon} />
                <br />
                Scrapbook
              </a>
            </li>
            <li>
              <a
                href="*"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <BiSearchAlt2 className={styles.icon} />
                <br />
                Search
              </a>
            </li>
            <li>
              <Link
                as={"a"}
                to="/cart"
                id={styles.cart_icon}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <AiOutlineShoppingCart className={styles.icon} />
                <span id={styles.count}>0</span>
                <br />
                Cart
              </Link>
            </li>
            <li>
              <a
                href="*"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <FaUser className={styles.icon} />
                <br />
                profile
              </a>
              <Box className={styles.profile_menu}>
                <h3>Welcome</h3>
                {data.length > 0 ? (
                  <Flex direction={"column"} justify={"space-around"} gap={5}>
                    <Text>{data[0].name}</Text>
                    <a href="/account">Account</a>
                  </Flex>
                ) : (
                  <a href="/login">Login</a>
                )}
                <button onClick={logout}>Logout</button>
                <a href="/admin">Admin</a>
              </Box>
            </li>
          </ul>
        </Box>
        <Box className={styles.hamburger_menu}>
          <a href="*" onClick={() => setShow(!show)}>
            <GiHamburgerMenu id={styles.hamburger} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
