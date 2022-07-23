//Модуль отрисовывает окно с полноразмерным изображением

//Элемент полноразмерного изображения
const bigPicture = document.querySelector('.big-picture');

//Контейнер для создаваемых комментариев
const commentsFragment = document.createDocumentFragment();

//Создаем комментарии под открываемую фотографию
const getCommentsBigPicture = (picture.comments) => {
  picture.comments.forEach((comment) => {
    const commentOrigin = document.querySelector('.social__comment');
    commentOrigin.cloneNode(true);
    commentOrigin.querySelector('.social__picture').src = comment.avatar;
    commentOrigin.querySelector('.social__picture').alt = comment.name;
    commentOrigin.querySelector('.social__text').textContent = comment.message;
    commentsFragment.append(commentOrigin);
  })
};

//Создаем данные для открываемой фотографии
const createBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__comments').textContent = '';
  bigPicture.querySelector('.social__comments').append = getCommentsBigPicture(picture.comments);
  bigPicture.querySelector('.social__caption').append = picture.description;
};

//Функция открывает фотографию
const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => { closePopup() });
  document.addEventListener('keydown', () => { closePopup() });
  createBigPicture(picture);
  temporaryFunction();
};

//Прячем блоки счётчика комментариев и загрузки новых комментариев, отключаем прокрутку в контейнере
const temporaryFunction = () => {
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');
document.body.classList.add('modal-open')
};

//Функция закрытия окна
const closePopup = () => {
bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export { openBigPicture }
