import styles from "./StoryInformation.module.scss";
import { useContext } from "react";

import StoryCardContext from "../StoryCardContext/StoryCard-Context";

export default function StoryInformation() {
  const ctx = useContext(StoryCardContext);

  return (
    <>
      <span className={styles.information}>
        Story score: <strong>{ctx?.userStory?.story?.score}</strong>
      </span>
      <span className={styles.information}>
        Written by: <strong>{ctx?.userStory?.user?.id}</strong>
      </span>
      <span className={styles.information}>
        Autor karma: <strong>{ctx?.userStory?.user?.karma}</strong>
      </span>
    </>
  );
}
