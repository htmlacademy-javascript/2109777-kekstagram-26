//Модуль рисует миниатюры и добавляет их на страницу
import { openBigPicture } from './popup';

//Шаблон для фото
const pictureTemplate = document.querySelector('#picture').content;
//Контейнер для создаваемых фото
const picturesContainer = document.querySelector('.pictures');
//Фрагмент для сбора данных и передачи в контейнер
const picturesFragment = document.createDocumentFragment();

//Создает фото на основе щаблона
const createPicture = (picture) => {
  const pictureOrigin = pictureTemplate.cloneNode(true);
  pictureOrigin.querySelector('.picture__img').src = picture.url;
  pictureOrigin.querySelector('.picture__likes').textContent = picture.likes;
  pictureOrigin.querySelector('.picture__comments').textContent = picture.comments;
  pictureOrigin.querySelector('.picture').addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(picture);
  });
  picturesFragment.appendChild(pictureOrigin);
};

//Добавляет фото-миниатюры на страницу
const addPictures = (photosLibrary) => {
  photosLibrary.forEach((picture) => createPicture(picture));
  picturesContainer.appendChild(picturesFragment);
};

export { addPictures };
