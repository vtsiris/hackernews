import { useSelector } from "react-redux";
import { LoadingStateEnum } from "../../../models/SharedModel";
import { getUserStoryListLoadingStateSelector } from "../../../redux/UserStoryRedux/UserStorySelector";
import styles from "./DashboardFooter.module.scss";

interface IDashboardFooterProps {
  hasOverflow: boolean;
}

export default function DashboardFooter({
  hasOverflow,
}: IDashboardFooterProps) {
  const userStoryListLoadingState: LoadingStateEnum = useSelector(
    getUserStoryListLoadingStateSelector
  );
  return (
    <div
      className={`${styles.footerContainer} ${
        userStoryListLoadingState !== LoadingStateEnum.LoadingState
          ? styles.footerJustifyStart
          : styles.footerJustifyEnd
      }`}
    >
      {userStoryListLoadingState !== LoadingStateEnum.LoadingState &&
        !!hasOverflow && <span>Keep scrolling for more news..</span>}
      {userStoryListLoadingState === LoadingStateEnum.LoadingState && (
        <span>Loading...</span>
      )}
    </div>
  );
}
