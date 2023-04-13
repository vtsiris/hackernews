import { useContext } from "react";
import styles from "./StoryHeadline.module.scss";

import moment from "moment";

import StoryCardContext from "../StoryCardContext/StoryCard-Context";

export default function StoryHeadline() {
  const ctx = useContext(StoryCardContext);

  return (
    <div className={styles.headlineContainer}>
      <span className={styles.date}>
        {moment(
          new Date((ctx?.userStory?.story?.time || 0) * 1000).toUTCString()
        ).format("MMM Do YYYY")}
      </span>
      <span className={styles.storyTitle}>{ctx?.userStory?.story?.title}</span>
    </div>
  );
}
