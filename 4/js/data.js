
// Создаёт данные для страницы

import { NAMES, DESCS, MESSAGES } from "./moc-data";
import { getRandomPositiveInteger } from "./util";

const commentIds = [];

const createPost = () => {
  const createComment = () => {
    const commentId = commentIds.length + 1;
    commentIds.push(1);
    return {
      id: commentId,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    };
  };
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: DESCS[getRandomPositiveInteger(0, DESCS.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 50)}, createComment),
  };
};

export {createPost};
