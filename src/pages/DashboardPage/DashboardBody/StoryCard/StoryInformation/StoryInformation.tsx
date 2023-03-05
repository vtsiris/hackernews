import styles from "./StoryInformation.module.scss";

import { IUserStory } from "../../../../../models/UserStoryModel";

interface IStoryInformationsProps {
  userStory: IUserStory;
}

export default function StoryInformation({
  userStory,
}: IStoryInformationsProps) {
  return (
    <>
      <span className={styles.information}>
        Story score: <strong>{userStory?.story?.score}</strong>
      </span>
      <span className={styles.information}>
        Written by: <strong>{userStory?.user?.id}</strong>
      </span>
      <span className={styles.information}>
        Autor karma: <strong>{userStory?.user?.karma}</strong>
      </span>
    </>
  );
}
