import { useState } from "react";

import styles from "./DashboardPage.module.scss";

import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardBody from "./DashboardBody/DashboardBody";
import DashboardFooter from "./DashboardFooter/DashboardFooter";

export default function DashboardPage() {
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);

  return (
    <div className={styles.pageContainer}>
      <DashboardHeader />
      <DashboardBody
        hasOverflow={hasOverflow}
        setHasOverflow={setHasOverflow}
      />
      <DashboardFooter hasOverflow={!!hasOverflow} />
    </div>
  );
}
