import React, { useState } from "react";
import styles from "./Men.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const images = [
  {
    id: "1",
    title: "All day,everyday basics",
    img1: "https://img0.junaroad.com/stories/story_p_640ed6e5f38057080fc170e9-1678877793.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "2",
    title: "#gettingtogym essentials",
    img1: "https://img2.junaroad.com/stories/story_p_640ef2a8fd1d3c4563aafb62-1678877617.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "3",
    title: "get those #groovygraphics",
    img1: "https://img2.junaroad.com/stories/story_p_640aa1eefd1d3c4563a47789-1679548435.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "4",
    title: "look cooler with prints",
    img1: "https://img0.junaroad.com/stories/story_p_6411b78db388b008214a5729-1679011153.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "5",
    title: "out & About in graphics",
    img1: "https://img2.junaroad.com/stories/story_p_640aaae7adb8b86e22aea86f-1678421104.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "6",
    title: "it's here to stay!",
    img1: "https://img3.junaroad.com/stories/story_p_64002c07f47b70082e471885-1678417715.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "7",
    title: "style it like celebs",
    img1: "https://img0.junaroad.com/stories/story_p_63feb5c4b388b00817383ec2-1677637575.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "8",
    title: "tees,shirts,trousers and ...",
    img1: "https://img2.junaroad.com/stories/story_p_63f4085aadb8b819ee6a858f-1677638545.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "9",
    title: "feel the vacay vibes",
    img1: "https://img3.junaroad.com/stories/story_p_63e22775b388b0081fbd7b5e-1678522516.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "10",
    title: "look famous | solid t-shirts",
    img1: "https://img0.junaroad.com/stories/story_p_63ee243f13cb38082c63a653-1676551231.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "11",
    title: "hand picked colour block t...",
    img1: "https://img2.junaroad.com/stories/story_p_63ee22f513cb38082c63a59a-1676550901.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "12",
    title: "great look | printed t-shirts",
    img1: "https://img3.junaroad.com/stories/story_p_63ee2165b388b0081b2d08ec-1676550501.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "13",
    title: "clothes that smile | colour...",
    img1: "https://img0.junaroad.com/stories/story_p_63ee187efd1d3c6a4c6363f2-1676980500.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "14",
    title: "#winterworthy celeb look",
    img1: "https://img2.junaroad.com/stories/story_p_63c50384f38057081856f28a-1679821667.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "15",
    title: "new Arrivals | #comfybasics",
    img1: "https://img3.junaroad.com/stories/story_p_63bbc7a7cc8b5e082d248dcc-1673860725.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "16",
    title: "stock up on #rugbystripes",
    img1: "https://img0.junaroad.com/stories/story_p_63be8a8e13cb38081d66c6a4-1674645878.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "17",
    title: "#staythome style 101",
    img1: "https://img2.junaroad.com/stories/story_p_63b7ed9bf3805708269bef63-1673860550.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "18",
    title: "#coolcasuals 101",
    img1: "https://img3.junaroad.com/stories/story_p_63b7f4e7cc8b5e081af99ca5-1679822437.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "19",
    title: "new arrivals| #pickpolos",
    img1: "https://img0.junaroad.com/stories/story_p_63a95cd5f3805708227a5a64-1672997326.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "20",
    title: "go crazy with prints",
    img1: "https://img2.junaroad.com/stories/story_p_63a5712cadb8b82d0e11d5d1-1676877950.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "21",
    title: "play with prints| #trending...",
    img1: "https://img3.junaroad.com/stories/story_p_63a9356513cb38081c75dea5-1679996423.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "22",
    title: "new Arrivals| #bebasic",
    img1: "https://img0.junaroad.com/stories/story_p_63a05a95adb8b82d0e0b0eab-1672221725.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "23",
    title: "always late for college?",
    img1: "https://img3.junaroad.com/stories/story_p_63998ae8adb8b82d0e02a6f1-1672779573.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "24",
    title: "let's be experimental",
    img1: "https://img0.junaroad.com/stories/story_p_6396d50bf47b70081b045858-1671621426.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "25",
    title: "fiery shade alert",
    img1: "https://img2.junaroad.com/stories/story_p_6391a605fd1d3c31f5c173e2-1672138373.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "26",
    title: "truly #celebapproved picks",
    img1: "https://img3.junaroad.com/stories/story_p_63886dd3adb8b82d0eeeae88-1670492558.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "27",
    title: "#workleisure | polo tees + ...",
    img1: "https://img2.junaroad.com/stories/story_p_63846bc7fd1d3c0db405d67b-1675501333.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "28",
    title: "all about #thevneck",
    img1: "https://img3.junaroad.com/stories/story_p_63871fbafd1d3c31f5b56bdd-1673922972.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "29",
    title: "get your wardrobe staples",
    img1: "https://img0.junaroad.com/stories/story_p_63562629adb8b86556e56d8d-1666590249.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  {
    id: "30",
    title: "brand edit | ausk",
    img1: "https://img2.junaroad.com/stories/story_p_633fca68cc8b5e0812cd56ab-1678274510.jpeg",
    img2: "https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    title2: "By Kanika.Crystal",
  },
  // {title:"we highly recommend them ",img1:"https://img3.junaroad.com/stories/story_p_637dc22af3805708206aa44b-1672783017.jpeg",img2:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",title2:"By Kanika.Crystal"},
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Men = () => {
  const [flag, setFlag] = useState(false);
  const [num, setNum] = useState(0);
  // const [product,setProduct]=useState([])
  // React.useEffect(()=>{
  //     fetch("https://maroon-sea-urchin-tam.cyclic.app/menproducts",{
  //         headers:{
  //             "Content-type":"application/json"
  //         }

  //     }).then((res)=>res.json())
  //     .then((res)=>setProduct(res))
  //     .catch(err=>console.log(err))
  // },[])
  const handleLike = (id) => {
    setNum(id);
    setFlag(!flag);
  };

  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.myfeed}>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg"
              alt="first"
            />
            <p>My feed</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/tshirts.png"
              alt="second"
            />
            <p>T-Shirts</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/shirts.png"
              alt="third"
            />
            <p>Shirts</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/jeans.png"
              alt="four"
            />
            <p>jeans</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/trousers.png"
              alt="five"
            />
            <p>trousers</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/ethnicsets.png"
              alt="six"
            />
            <p>ethnic sets</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/footwear.png"
              alt="seven"
            />
            <p>footwear</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/kids.png"
              alt="eight"
            />
            <p>kids</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/women/home.png"
              alt="nine"
            />
            <p>home</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/accessory.png"
              alt="ten"
            />
            <p>accessory</p>
          </div>
          <div className={styles.myfeed_menu}>
            <img
              src="https://img0.junaroad.com/images/icons/men/winter.png"
              alt="eleven"
            />
            <p>winter</p>
          </div>
        </div>
        <div className={styles.first_box}>
          <div>
            <img
              src="https://img0.junaroad.com/images/icons/130440_discount.gif"
              alt="pay-gif"
            />
            <div>
              <h5>Pay Online & Get Flat 10% Off</h5>
              <p>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</p>
            </div>
          </div>
          <div>
            <Carousel responsive={responsive} style={{ display: "flex" }}>
              <div>
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0    "
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1677239926933.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1651469168362.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1676438894037.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1678466728484.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
              <div>
                {" "}
                <img
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1657276563582.jpg?page_id=2391766&crsl_pos=1"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Avatar-1"
                />
              </div>
            </Carousel>
          </div>
          <div className={styles.card_container}>
            {images.length > 0 &&
              images.map((el, index) => {
                return (
                  <Link>
                    <div key={index} className={styles.cards}>
                      <p id={styles.card_title}>{el.title}</p>
                      <img src={el.img1} alt={el.title} />
                      <div className={styles.heart}>
                        <button
                          className={styles.like}
                          onClick={() => handleLike(el.id)}
                        >
                          <AiOutlineHeart
                            className={
                              flag && num === el.id
                                ? styles.like_icon
                                : styles.no_like
                            }
                          />
                        </button>
                      </div>
                      <div className={styles.kanika}>
                        <img src={el.img2} alt={el.title2} />
                        <p>{el.title2}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
