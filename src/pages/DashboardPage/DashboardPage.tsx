import { useState } from "react";

import styles from "./DashboardPage.module.scss";

import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardBody from "./DashboardBody/DashboardBody";
import DashboardFooter from "./DashboardFooter/DashboardFooter";
import { IUserStory } from "../../models/UserStoryModel";

export default function DashboardPage() {
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);
  const [sortNews, setSortNews] = useState<boolean>(false);

  return (
    <div className={styles.pageContainer}>
      <DashboardHeader setSortNews={setSortNews} />
      <DashboardBody
        hasOverflow={hasOverflow}
        sortNews={sortNews}
        setHasOverflow={setHasOverflow}
        setSortNews={setSortNews}
      />
      <DashboardFooter hasOverflow={!!hasOverflow} />
    </div>
  );
}
