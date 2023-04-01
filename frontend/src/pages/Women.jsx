import React, { useState } from 'react'
import styles from "./Men.module.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';


const images=[
    {id:"1",title:"#freshfav Additions",img1:"https://img0.junaroad.com/stories/story_p_641adf0cf3805708287887f4-1679484564.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"2",title:"counting on # themidnighth...",img1:"https://img2.junaroad.com/stories/story_p_6416d76bf38057081c082896-1679980823.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"3",title:"you're doing it right",img1:"https://img2.junaroad.com/stories/story_p_641483b9cc8b5e082a32d050-1679135097.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"4",title:"get set to be obsessed",img1:"https://img0.junaroad.com/stories/story_p_641ae288cc8b5e0814914c24-1679552254.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"5",title:"bag these mega wedding #C...",img1:"https://img2.junaroad.com/stories/story_p_6413011af47b70081f405cc9-1679545563.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"6",title:"pooja hegde nailing it!",img1:"https://img0.junaroad.com/stories/story_p_641060cfb388b0083538b0f9-1678875193.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"7",title:"explore #fresh styles!",img1:"https://img2.junaroad.com/stories/story_p_641198a3b388b008214a0665-1678875370.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"8",title:"purist blue gettin' popular!",img1:"https://img3.junaroad.com/stories/story_p_6411e1cff3805708276bffcd-1678983930.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"9",title:"omg they're so pretty",img1:"https://img0.junaroad.com/stories/story_p_640aec9ffd1d3c4563a4ff38-1678447640.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"10",title:"we've found the best",img1:"https://img2.junaroad.com/stories/story_p_6409afb4adb8b86e22ad5c7e-1678360657.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"11",title:"this is # celebapproved",img1:"https://img3.junaroad.com/stories/story_p_6403173bcc8b5e0819898f81-1679932819.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"12",title:"our #freshbies are lit",img1:"https://img0.junaroad.com/stories/story_p_640070d8cc8b5e082b767460-1678370438.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"13",title:"new month = new kurtas",img1:"https://img2.junaroad.com/stories/story_p_6405b41d13cb381f2554e3a0-1678354806.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"14",title:"attention ladies",img1:"https://img3.junaroad.com/stories/story_p_63fc8e2213cb38081bc52f23-1678868530.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"15",title:"v-neck edit | straight kurtas",img1:"https://img0.junaroad.com/stories/story_p_62bdab9af38057081de56793-1679674653.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"16",title:"pink please | kurtis",img1:"https://img2.junaroad.com/stories/story_p_62c46252b388b0082b349be1-1666491040.jpeg",img2:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png",title2:"By Pooja"},
    {id:"17",title:"trendy fusion sets",img1:"https://img3.junaroad.com/stories/story_p_62c3b5f813cb38081d665d9a-1666763635.jpeg",img2:"https://img1.junaroad.com/user_profile/profile_5795f141f80c246ada8dc53c-1630860785.png",title2:"By Krunal"},
    {id:"18",title:"#coolcasuals 101",img1:"https://img3.junaroad.com/stories/story_p_63b7f4e7cc8b5e081af99ca5-1679822437.jpeg",img2:"https://img0.junaroad.com/user_profile/profile_59127c6da7dae86b8216afaa-1678519977.png",title2:"By Divya N"},
    {id:"19",title:"so light, so fun",img1:"https://img0.junaroad.com/stories/story_p_63f87ca3b388b008213444c4-1677494695.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"20",title:"here's what we know ",img1:"https://img2.junaroad.com/stories/story_p_63f87e6a13cb380814dd97a0-1678510433.jpeg",img2:"https://img1.junaroad.com/user_profile/32.jpg",title2:"By Shivangini"},
    {id:"21",title:"explore #fresh styles!",img1:"https://img2.junaroad.com/stories/story_p_641198a3b388b008214a0665-1678875370.jpeg",img2:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",title2:"By Kanika.Crystal"},
    
]

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

const Women = () => {
    const [flag,setFlag]=useState(false)
    const [num,setNum]=useState(0)
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
const handleLike=(id)=>{
    setNum(id)
    setFlag(!flag)
}

 
  return (
    <div>
        <div className={styles.main_container}>
            <div className={styles.myfeed}>
                <div className={styles.myfeed_menu}>
                    <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg" alt="first"/>
                    <p>My feed</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/kurtas.png" alt="second"/>
                    <p>Kurtas</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/tops.png" alt="third"/>
                    <p>Tops</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/dresses.png" alt="four"/>
                    <p>dresses</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/sarees.png" alt="five"/>
                    <p>sarees</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/suits.png" alt="six"/>
                    <p>suits</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/ethnicsets.png" alt="seven"/>
                    <p>ethnic sets</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/bottoms.png" alt="eight"/>
                    <p>bottom</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/bags.png" alt="nine"/>
                    <p>bags</p>
                </div>
                 <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/footwear.png" alt="ten"/>
                    <p>footwear</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/kids.png" alt="eleven"/>
                    <p>kids</p>
                </div>
                <div className={styles.myfeed_menu}>
                    <img src="https://img0.junaroad.com/images/icons/women/winter.png" alt="eleven"/>
                    <p>winter</p>
                </div>
            </div>
            <div className={styles.first_box}>
                <div>
                   <img src="https://img0.junaroad.com/images/icons/130440_discount.gif" alt="pay-gif"/> 
                   <div>
                    <h5>Pay Online & Get Flat 10% Off</h5>
                    <p>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</p>
                   </div>
                </div>
                <div>
                <Carousel responsive={responsive} style={{ display: "flex" }}>
              <div>
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
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1679910400865.jpg?crsl_pos=0"
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
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1678875016329.jpg?crsl_pos=0"
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
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1673696931249.jpg?crsl_pos=0"
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
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1673614465338.jpg?crsl_pos=0"
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
                  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1679592536138.jpg?crsl_pos=0"
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
                   {images.length>0 && images.map((el,index)=>{

                    return <Link><div key={index} className={styles.cards}>
                        <p id={styles.card_title}>{el.title}</p>
                        <img src={el.img1} alt={el.title}/>
                        <div className={styles.heart}>
                           <button className={styles.like} onClick={()=>handleLike(el.id)}>
                            <AiOutlineHeart  className={flag && num===el.id ? styles.like_icon: styles.no_like}/>
                           </button>
                        </div>
                        <div className={styles.kanika}>
                            <img src={el.img2} alt={el.title2}/>
                            <p>{el.title2}</p>
                        </div>
                    </div></Link>
                   })} 

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Women