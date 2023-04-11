import { useCallback } from "react";

import styles from "./DashboardHeader.module.scss";

import { useDispatch } from "react-redux";
import { sortUserStoryListAction } from "../../../redux/UserStoryRedux/UserStoryActions";

export default function DashboardHeader() {
  const dispatch = useDispatch();

  const sortNewsByAscendingScoreHandler = useCallback(() => {
    console.log("here");
    dispatch(sortUserStoryListAction());
  }, [dispatch]);

  return (
    <div className={styles.headerContainer}>
      <span>The Hacker NewsRoom</span>
      <span
        className={styles.sortAscending}
        onClick={sortNewsByAscendingScoreHandler}
      >
        Sort ascending
      </span>
    </div>
  );
}
