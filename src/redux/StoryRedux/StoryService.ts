import axios from "axios";
import { IStory } from "../../models/StoryModel";

export const getTopStoryUIDListAsync = () => {
  return axios.get<number[]>(
    `https://hacker-news.firebaseio.com/v0/topstories.json`
  );
};

export const getStoryAsync = (storyID: number) => {
  return axios.get<IStory>(
    `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
  );
};
