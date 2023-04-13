import { useState } from "react";

import StoryCardContext from "./StoryCard-Context";

import { IUserStory } from "../../../../../models/UserStoryModel";

const StoryCardProvider = (props: any) => {
  const [userStory, setUserStory] = useState<IUserStory>();

  return (
    <StoryCardContext.Provider value={{ userStory, setUserStory }}>
      {props.children}
    </StoryCardContext.Provider>
  );
};

export default StoryCardProvider;
