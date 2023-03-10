import { useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from "./DashboardBody.module.scss";
import StoryCard from "./StoryCard/StoryCard";

import { useDispatch, useSelector } from "react-redux";

import { LoadingStateEnum } from "../../../models/SharedModel";
import { IUserStory } from "../../../models/UserStoryModel";
import { getTopStoriesAction } from "../../../redux/StoryRedux/StoryActions";
import { getTopStoryListSelector } from "../../../redux/StoryRedux/StorySelector";
import { getUserStoryAction } from "../../../redux/UserStoryRedux/UserStoryActions";
import {
  getUserStoryListLoadingStateSelector,
  getUserStoryListSelector,
} from "../../../redux/UserStoryRedux/UserStorySelector";

interface IDashboardBodyProps {
  hasOverflow: boolean;
  sortNews: boolean;
  setHasOverflow: (arg: boolean) => void;
  setSortNews: (arg: boolean) => void;
}

export default function DashboardBody({
  hasOverflow,
  sortNews,
  setHasOverflow,
  setSortNews,
}: IDashboardBodyProps) {
  const containerRef = useRef(null);

  const dispatch = useDispatch();

  const topStoryList: number[] = useSelector(getTopStoryListSelector);
  const userStoryList: IUserStory[] = useSelector(getUserStoryListSelector);
  const userStoryListLoadingState: LoadingStateEnum = useSelector(
    getUserStoryListLoadingStateSelector
  );

  const [storyListIndex, setStoryListIndex] = useState<number>(10);
  const [storyList, setStoryList] = useState<IUserStory[]>([]);

  useEffect(() => {
    dispatch(getTopStoriesAction());
  }, []);

  useEffect(() => {
    const stories: number[] = (topStoryList || [])?.slice(
      storyListIndex - 10,
      storyListIndex
    );
    if (!!stories?.length) {
      dispatch(getUserStoryAction(stories));
    }
  }, [topStoryList, storyListIndex]);

  useLayoutEffect(() => {
    if (userStoryListLoadingState === LoadingStateEnum.CompletedState) {
      if (storyListIndex === 10) {
        const sortedStories: IUserStory[] = userStoryList.sort(
          (a, b) => a?.story?.score - b?.story?.score
        );
        setStoryList(sortedStories);
      } else {
        setStoryList(userStoryList);
      }
    }
  }, [userStoryList, userStoryListLoadingState]);

  useLayoutEffect(() => {
    const container: HTMLDivElement | null =
      containerRef?.current as HTMLDivElement | null;
    if (!!container) {
      const elementOverflow =
        container?.scrollHeight > container?.clientHeight ||
        container?.scrollWidth > container?.clientWidth;
      setHasOverflow(elementOverflow);
    }
  }, [storyList]);

  useLayoutEffect(() => {
    const sortedStories: IUserStory[] = (storyList || []).sort(
      (a, b) => a?.story?.score - b?.story?.score
    );
    setStoryList(sortedStories);
    setSortNews(false);
  }, [sortNews]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const element = e?.target as HTMLDivElement;
    const bottom =
      element?.scrollHeight - element?.scrollTop === element?.clientHeight;
    if (!!bottom) {
      setStoryListIndex((prevState: number) => prevState + 10);
    }
  };

  return (
    <>
      <div
        onScroll={handleScroll}
        className={styles.bodyContainer}
        ref={containerRef}
      >
        {!storyList?.length && (
          <div className={styles.newsLoading}>
            Please be patient while news are loading
          </div>
        )}
        {(storyList || []).map((userStory: IUserStory, index: number) => (
          <StoryCard
            key={`${index}-${userStory?.story?.id}`}
            userStory={userStory}
            isLeftItem={index % 2 === 0}
          />
        ))}
      </div>
      {!hasOverflow &&
        userStoryListLoadingState === LoadingStateEnum.CompletedState && (
          <div className={styles.loadMoreButtonWrapper}>
            <button
              className={styles.loadMoreButton}
              onClick={() =>
                setStoryListIndex((prevState: number) => prevState + 10)
              }
            >
              Load more
            </button>
          </div>
        )}
    </>
  );
}
