import React from "react";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import logo from "./logo.jpg";
import { RsFooter } from "../ResponsiveFooter/RsFooter";
// import { MsFooter } from "../ResponsiveFooter/RsFooter";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div>
            <h3 className={styles.footerTitle}>Buy</h3>
            <ul className={styles.footerHead}>
              <li>
                <Link to="*">Registration</Link>
              </li>
              <li>
                <Link to="*">Money Back Guarantee</Link>
              </li>
              <li>
                <Link to="*">Bidding & buying help</Link>
              </li>
              <li>
                <Link to="*"> Stores</Link>
              </li>
            </ul>
            <Link to="/">
              <img src={logo} alt="logo" id={styles.logo} />
            </Link>
          </div>

          <div className={styles.footerHeaderOrderList}>
            <div>
              <h3 className={styles.footerTitle}>Sell</h3>
              <ul className={styles.footerHead}>
                <li>
                  <Link to="*"> Start selling</Link>
                </li>
                <li>
                  <Link to="*">Learn to sell</Link>
                </li>
                <li>
                  <Link to="*">Affiliates</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.footerTitle}> Tools & apps</h3>
              <ul className={styles.footerHead}>
                <li>
                  <Link to="*"> Developers</Link>
                </li>
                <li>
                  <Link to="*">Security center</Link>
                </li>
                <li>
                  <Link to="*">Site map</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className={styles.footerTitle}>Stay connected</h3>
            <ul className={styles.footerHead}>
              <li>
                <Link to="*">stylozone Blogs</Link>
              </li>
              <li>
                <Link to="*" className={styles.footerHeadListLink}>
                  <AiFillFacebook />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="*" className={styles.footerHeadListLink}>
                  <AiFillTwitterSquare />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerTitle}>About StyloZone</h3>

            <ul className={styles.footerHead}>
              <li>
                <Link to="*">Company info</Link>
              </li>
              <li>
                <Link to="*">News</Link>
              </li>
              <li>
                <Link to="*">Investors</Link>
              </li>
              <li>
                <Link to="*">Careers</Link>
              </li>
              <li>
                <Link to="*">Government relations</Link>
              </li>
              <li>
                <Link to="*">Advertise with us</Link>
              </li>
              <li>
                <Link to="*">Policies</Link>
              </li>
              <li>
                <Link to="*">Verified Rights Owner (VeRO) Program</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerHeaderOrderList}>
            <div>
              <h3 className={styles.footerTitle}>Help & contact</h3>
              <ul className={styles.footerHead}>
                <li>
                  <Link to="*">Seller Information Center</Link>
                </li>
                <li>
                  <Link to="*">Contact us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={styles.footerTitle}> Community</h3>

              <ul className={styles.footerHead}>
                <li>
                  <Link to="*"> Announcements</Link>
                </li>
                <li>
                  <Link to="*">Discussion boards</Link>
                </li>
                <li>
                  <Link to="*">StyloZone Giving Works</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerdescription}>
          Copyright © 2022-2024 StyloZone Inc. All Rights Reserved.
          Accessibility, User Agreement, Privacy, Payments Terms of Use,
          Cookies, Your Privacy Choices and AdChoice
        </div>
         <div className={styles.msFooter}>
          <RsFooter />
        </div>
      </div>
    </div>
  );
};
