import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import styles from "./DashboardBody.module.scss";
import StoryCard from "./StoryCard/StoryCard";

import { useDispatch, useSelector } from "react-redux";

import { IUserStory } from "../../../models/UserStoryModel";
import { getTopStoryUIDListAction } from "../../../redux/StoryRedux/StoryActions";
import { getTopStoryUIDListSelector } from "../../../redux/StoryRedux/StorySelector";
import { getUserStoryAction } from "../../../redux/UserStoryRedux/UserStoryActions";
import {
  getUserStoryListIsCompletedLoadingStateSelector,
  getUserStoryListSelector,
} from "../../../redux/UserStoryRedux/UserStorySelector";
import StoryCardProvider from "./StoryCard/StoryCardContext/StoryCard-Provider";

interface IDashboardBodyProps {
  hasOverflow: boolean;
  setHasOverflow: (arg: boolean) => void;
}

export default function DashboardBody({
  hasOverflow,
  setHasOverflow,
}: IDashboardBodyProps) {
  const containerRef = useRef<any>();
  const dispatch = useDispatch();

  const topStoryUIDList: number[] = useSelector(getTopStoryUIDListSelector);
  const userStoryList: IUserStory[] = useSelector(getUserStoryListSelector);
  const isUserStoryListLoadingCompleted: boolean = useSelector(
    getUserStoryListIsCompletedLoadingStateSelector
  );

  const [storyListIndex, setStoryListIndex] = useState<number>(10);
  const [storyList, setStoryList] = useState<IUserStory[]>([]);

  useEffect(() => {
    dispatch(getTopStoryUIDListAction());
  }, [dispatch]);

  useEffect(() => {
    const storyUIDList: number[] = (topStoryUIDList || [])?.slice(
      storyListIndex - 10,
      storyListIndex
    );
    if (!!storyUIDList?.length) {
      dispatch(getUserStoryAction(storyUIDList));
    }
  }, [topStoryUIDList, storyListIndex, dispatch]);

  useLayoutEffect(() => {
    if (!!isUserStoryListLoadingCompleted) {
      setStoryList(userStoryList);
    }
  }, [isUserStoryListLoadingCompleted, storyListIndex, userStoryList]);

  useLayoutEffect(() => {
    const container: HTMLDivElement = containerRef?.current;
    if (!!container) {
      const elementOverflow =
        container?.scrollHeight > container?.clientHeight ||
        container?.scrollWidth > container?.clientWidth;
      setHasOverflow(elementOverflow);
    }
  }, [setHasOverflow, storyList]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const element = e?.target as HTMLDivElement;
    const bottom =
      element?.scrollHeight - element?.scrollTop === element?.clientHeight;
    if (!!bottom) {
      setStoryListIndex((prevState: number) => prevState + 10);
    }
  };

  const setStoryListIndexHandler = useCallback((): void => {
    setStoryListIndex((prevState: number) => prevState + 10);
  }, []);

  const renderStoryList = (): JSX.Element[] => {
    return (storyList || []).map((userStory: IUserStory, index: number) => {
      return (
        <StoryCardProvider key={`${index}-${userStory?.story?.id}`}>
          <StoryCard
            key={`${index}-${userStory?.story?.id}`}
            userStory={userStory}
            isLeftItem={index % 2 === 0}
          />
        </StoryCardProvider>
      );
    });
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
        {renderStoryList()}
      </div>
      {!hasOverflow && !!isUserStoryListLoadingCompleted && (
        <div className={styles.loadMoreButtonWrapper}>
          <button
            className={styles.loadMoreButton}
            onClick={setStoryListIndexHandler}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
