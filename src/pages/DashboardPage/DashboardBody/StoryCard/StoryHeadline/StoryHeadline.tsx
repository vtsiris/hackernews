import styles from "./StoryHeadline.module.scss";

import moment from "moment";

import { IUserStory } from "../../../../../models/UserStoryModel";

interface IStoryHeadlineProps {
  userStory: IUserStory;
}

export default function StoryHeadline({ userStory }: IStoryHeadlineProps) {
  return (
    <div className={styles.headlineContainer}>
      <span className={styles.date}>
        {moment(new Date(userStory?.story?.time * 1000).toUTCString()).format(
          "MMM Do YYYY"
        )}
      </span>
      <span className={styles.storyTitle}>{userStory?.story?.title}</span>
    </div>
  );
}
