//Модуль рисует миниатюры и добавляет их на страницу

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

//Создает фото на основе щаблона
const createPicture = ({url, likes, comments}) => {
  const pictureOrigin = pictureTemplate.cloneNode(true);
  pictureOrigin.querySelector('.picture__img').src = url;
  pictureOrigin.querySelector('.picture__likes').textContent = likes;
  pictureOrigin.querySelector('.picture__comments').textContent = comments;
  picturesFragment.appendChild(pictureOrigin);
};


//Добавляет фото-миниатюры на страницу
const addPictures = () => {
  createPicture();
  picturesContainer.appendChild(picturesFragment);
};

export { addPictures };
