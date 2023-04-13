import { useState } from "react";

import styles from "./DashboardPage.module.scss";

import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardBody from "./DashboardBody/DashboardBody";
import DashboardFooter from "./DashboardFooter/DashboardFooter";
import StoryCardProvider from "./DashboardBody/StoryCard/StoryCardContext/StoryCard-Provider";

export default function DashboardPage() {
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);

  return (
    <div className={styles.pageContainer}>
      <DashboardHeader />
      {/* <StoryCardProvider> */}
      <DashboardBody
        hasOverflow={hasOverflow}
        setHasOverflow={setHasOverflow}
      />
      {/* </StoryCardProvider> */}

      <DashboardFooter hasOverflow={!!hasOverflow} />
    </div>
  );
}
