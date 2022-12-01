import React from "react";

import styles from "./Header.module.scss";
import { Link } from "../UI/Link";

import logoIcon from "../../assets/icons/Logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href={"/"} className={styles.header__logotype}>
          <img
            className={styles.header__logotype__image}
            src={logoIcon}
            alt=""
          />
          <p className={styles.header__logotype__text}>{"TaskApi"}</p>
        </Link>
      </div>
    </header>
  );
};

export { Header };
