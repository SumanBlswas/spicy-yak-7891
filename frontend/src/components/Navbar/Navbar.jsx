import React from "react";
import styles from "./Navbar.module.css";
import { HiPencil } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
 
  return (
    <div>
      <div className={styles.navbar_container}>
        <div className={styles.first_box}>
          <div id={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            {/* LimeRoad */}
          </div>
          <div className={show ? styles.nav_menu_links : styles.nav_links}>
            <ul className={styles.ul_links}>
              <li>
                <a href="#">Women</a>
                <div className={styles.women_menu}>
                  <div id={styles.ethnic_wear}>
                    <button>Ethnic Wear</button>
                    <p>Kurta Kurtis</p>
                    <p>Sarees</p>
                    <p>Ethnic Sets</p>
                    <p>Suits& Dress Materials</p>
                    <p>Lehengas</p>
                    <p>Blouses</p>
                    <p>Dupattas</p>
                    <p>Ethnic Dresses</p>
                    <p>Palazzos & Skirts</p>
                    <p>Shawls & Wraps</p>
                    <p>Cloaks & Abaya</p>
                  </div>
                  <div id={styles.western_wear}>
                    <button>Western Wear</button>
                    <p>Tops</p>
                    <p>Dresses</p>
                    <p>Tees</p>
                    <p>Shirts</p>
                    <p>Tunics</p>
                    <p>Jumpsuits</p>
                    <p>Sets</p>
                    <p>Kaftans</p>
                    <p>Jeans & Jeggings</p>
                    <p>Trousers & Pants</p>
                    <p>Shrugs</p>
                  </div>
                  <div id={styles.sports}>
                    <button>Sports & Activewear</button>
                    <p>Swims</p>
                    <p>Topwear</p>
                    <p>Bottomwear</p>
                    <p>Shoes</p>
                    <button>Lingerie & Sleepwear</button>
                    <p>Bra</p>
                    <p>Panties</p>
                    <p>Lingerie</p>
                    <p>SleepWear</p>
                    <button>Belts & Watches</button><br/><br/>
                    <button>Sunglasses & Hats</button>
                    
                  </div>
                  <div id={styles.jeweller}>
                    <button>Jewellery</button>
                    <p>Fashion Jewellery</p>
                    <p>lmitation Jewellery</p>
                    <p>Earnings</p>
                    <p>Necklace & Pendants</p>
                    <button>Footwear</button>
                    <p>Flats</p>
                    <p>Heels</p>
                    <p>Casual Shoes</p>
                    <p>Flip Flops</p>
                    <button>Beauty & Personal Care</button>
                    
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Men</a>
                <div className={styles.women_menu}>
                  <div id={styles.ethnic_wear}>
                    <button>Top Wear</button>
                    <p>T-Shirts</p>
                    <p>Polo T Shirts</p>
                    <p>Casual Shirts</p>
                    <p>Formal Shirts</p>
                    <p>Suits & Blazers</p>
                    <p>Jackets</p>
                    <p>Sweaters & SweatShirts</p>
                   <button>Bottom Wear</button>
                    <p>Jeans</p>
                    <p>Casual Trousers</p>
                    <p>Formal Trousers</p>
                    <p>Joggers</p>
                    <p>Shorts</p>
                  </div>
                  <div id={styles.western_wear}>
                    <button>Ethnic Wear</button>
                    <p>Kurtas</p>
                    <p>Ethnic Wear Sets</p>
                    <p>Nehru Jackets</p>
                    <p>Ethnic Bottom Wear</p>
                    <button>Sports Wear</button>
                    <p>T-Shirts</p>
                    <p>Shorts</p>
                    <p>Track Pants</p>
                    <p>Track Suits</p>                    
                    <button>Fragrances</button>
                  </div>
                  <div id={styles.sports}>
                    <button>Footwear</button>
                    <p>Casual Shoes</p>
                    <p>Formal Shoes</p>
                    <p>Sports Shoes</p>
                    <p>Jutis And Mojans</p>
                    <p>Slippers & Sandals</p>
                    <p>Socks</p>
                    <button>Belts,Bags & Wallets</button> <br/><br/>                  
                    <button>Watches</button><br/><br/>
                    <button>Sunglasses & Frames</button>
                    
                  </div>
                  <div id={styles.jeweller}>
                    <button>Brands</button>
                    <p>Arrow</p>
                    <p>US Polo Assn </p>
                    <p>Aeropostale</p>
                    <p>Campus Sutra</p>                    
                    <p>Ruggers</p>
                    <p>Canary London</p>
                    <p>Hang Up</p>
                    <p>Alcis</p>
                    
                    
                  </div>
                </div>

              </li>
              <li>
                <a href="#">Kids</a>
                <div className={styles.women_menu}>
                  <div id={styles.ethnic_wear}>
                    <button>Boys</button>
                    <p>T-Shirts</p>
                    <p>Shirts</p>
                    <p>Bottom Wear</p>
                    <p>Ethnic Wear</p>
                    <p>Sweater & Cardigans</p>
                    <p>Coats & Jackets</p>
                    <p>InnerWear & Nightwear</p>
                    <p>Twin Sets & Dungrees</p>
                    <p>Palazzos & Skirts</p>
                    <p>Shawls & Wraps</p>
                    <p>Cloaks & Abaya</p>
                    
                  </div>
                  <div id={styles.western_wear}>
                    <button>Girls</button>
                    <p>Dresses & Frocks</p>
                    <p>Tees & Tops</p>
                    <p>Bottom Wear</p>
                    <p>Ethnic Wear</p>
                    <p>Sweater & Cardigans</p>
                    <p>Coats & Jackets</p>
                    <p>Twin Sets & Jump Suits</p>
                    <p>Innerwear & Nightwear</p>                    
                  </div>
                  <div id={styles.sports}>
                    <button>Footwear</button>
                    <p>Sandals & Floaters</p>
                    <p>Slippers & Flip Flops</p>
                    <p>Casual Shoes</p>
                    <p>Sports Shoes</p>                   
                    <p>Formal Shoes</p>
                    <button>Accessories</button>  <br/><br/>                  
                    <button>Bed & Bath</button>
                    
                    
                  </div>
                  <div id={styles.jeweller}>
                    <button>Brands</button>
                    <p>Giny & Jony</p>
                    <p>US Polo Assn </p>
                    <p>Monte Carlo</p>
                    <p>Cherokee</p>                    
                    <p>Li'l Tomatoes</p>
                    <p>NewVin</p>
                    <p>Under Fourteen Only</p>
                    <p>Tales & Stories</p>
                   
                    
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">offers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.second_box}>
          <ul className={styles.second_ul_links}>
            <li>
              <a href="#">
                <HiPencil className={styles.icon} />
                <br />
                Scrapbook
              </a>
            </li>
            <li>
              <a href="#">
                <BiSearchAlt2 className={styles.icon} />
                <br />
                Search
              </a>
            </li>
            <li>
              <a href="#" id={styles.cart_icon}>
                <AiOutlineShoppingCart className={styles.icon} />
                <span id={styles.count}>0</span>
                <br />
                Cart
              </a>
            </li>
            <li>
              <a href="#">
                <FaUser className={styles.icon} />
                <br />
                profile
              </a>
              <div className={styles.profile_menu}>                
                <h3>Welcome</h3>
                <a href="#">Login</a>
                <button>Logout</button>
                <a href="#">Admin</a>

              </div>
            </li>
          </ul>
        </div>
        <div className={styles.hamburger_menu}>
          <a href="#" onClick={() => setShow(!show)}>
            <GiHamburgerMenu id={styles.hamburger} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
