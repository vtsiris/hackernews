import styles from "./StoryCard.module.scss";

import StoryHeadline from "./StoryHeadline/StoryHeadline";
import StoryImage from "./StoryImage/StoryImage";
import StoryInformation from "./StoryInformation/StoryInformation";

import { IUserStory } from "../../../../models/UserStoryModel";
import { useCallback } from "react";

interface IStoryCardProps {
  userStory: IUserStory;
  isLeftItem: boolean;
}

export default function StoryCard({ userStory, isLeftItem }: IStoryCardProps) {
  const navigateToLinkHandler = useCallback((): void => {
    window.open(userStory?.story?.url, "_blank");
  }, [userStory?.story?.url]);

  return (
    <div
      onClick={navigateToLinkHandler}
      className={`${styles.cardContainer} ${!!isLeftItem && styles.leftItem}`}
    >
      <StoryImage />
      <div className={styles.childWrapper}>
        <StoryHeadline userStory={userStory} />
        <StoryInformation userStory={userStory} />
      </div>
    </div>
  );
}
