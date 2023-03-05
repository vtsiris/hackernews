import { IUserStory } from "../../../../models/UserStoryModel";
import styles from "./StoryCard.module.scss";
import StoryHeadline from "./StoryHeadline/StoryHeadline";
import StoryImage from "./StoryImage/StoryImage";
import StoryInformation from "./StoryInformation/StoryInformation";

interface IStoryCardProps {
  userStory: IUserStory;
  isLeftItem: boolean;
}

export default function StoryCard({ userStory, isLeftItem }: IStoryCardProps) {
  return (
    <div
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
