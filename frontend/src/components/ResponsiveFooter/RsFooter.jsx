import React from "react";
import styles from "./RsFooter.module.css";

export const MsFooter = () => {
  return (
    <div>
      <div className={styles.msFooter}>
        <div>About eBuzz</div>
        <div>Announcement</div>
        <div>Community</div>
        <div>Security</div>
        <div>Seller information Center</div>
        <div>Policies</div>
        <div>Affiliates</div>
        <div>Help & Contact</div>
        <div>Site map</div>
      </div>

      <div className={styles.footerdescription}>
        Copyright © 2022-2024 ebuzz Inc. All Rights Reserved. Accessibility,
        User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy
        Choices and AdChoice
      </div>
    </div>
  );
};
