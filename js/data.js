
//Модуль создает данные для страницы

import { NAMES, DESCS, MESSAGES } from './moc-d';
import { getRandomPositiveInteger } from './util';

let commentCount = 0;
let photoCount = 0;

//Создает комментарий для фотографии
const createComment = () => {
  commentCount++;
  return {
    id: commentCount,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  };
};

//Создает данные для фотографии
const createPhoto = () => {
  photoCount++;
  return {
    id: photoCount,
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: DESCS[getRandomPositiveInteger(0, DESCS.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 50)}, createComment),
  };
};

//Создает посты с фотографиями и комментариями
const createPost = () => {
  createComment ();
  createPhoto ();
};

//Формируем массив из фото
const photosLibrary = Array.from({length: 25}, createPhoto);

export {createPost, photosLibrary};
