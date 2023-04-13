import { useCallback, useContext, useEffect } from "react";
import styles from "./StoryCard.module.scss";

import StoryHeadline from "./StoryHeadline/StoryHeadline";
import StoryImage from "./StoryImage/StoryImage";
import StoryInformation from "./StoryInformation/StoryInformation";
import StoryCardContext from "./StoryCardContext/StoryCard-Context";
import { IUserStory } from "../../../../models/UserStoryModel";

interface IStoryCardProps {
  userStory: IUserStory;
  isLeftItem: boolean;
}

export default function StoryCard({ userStory, isLeftItem }: IStoryCardProps) {
  const ctx = useContext(StoryCardContext);

  useEffect(() => {
    ctx.setUserStory(userStory);
  }, [ctx, userStory]);

  const navigateToLinkHandler = useCallback((): void => {
    window.open(ctx.userStory?.story?.url, "_blank");
  }, [ctx?.userStory?.story?.url]);

  return (
    <div
      onClick={navigateToLinkHandler}
      className={`${styles.cardContainer} ${!!isLeftItem && styles.leftItem}`}
    >
      <StoryImage />
      <div className={styles.childWrapper}>
        <StoryHeadline />
        <StoryInformation />
      </div>
    </div>
  );
}
