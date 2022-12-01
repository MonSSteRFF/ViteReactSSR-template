import React from "react";

import styles from "./Aside.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__wrapper}></div>
    </aside>
  );
};

export { Aside };
