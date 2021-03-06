import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <em>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <a href="https://www.linkedin.com/in/abhudaym/">Abhuday Mishra</a>
        </em>
      </p>
    </div>
  );
}

export default Footer;
