function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const Desc = [
  'Люблю фоточки',
  'Хочу на море',
  'Котики - моя жизнь',
  'Стакан наполовину полон',
  'Стакан наоплоивну пуст',
  'Пустышка этот стакан',
  'Стакан не пустой',
  'Жизнь продолжается',
];

const Messages = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const Posts= 25;

const arrayId = [];

const createPost = () => {
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomID = getRandomPositiveInteger(1, Posts);
  const i = getRandomPositiveInteger(1, Posts);
  const randomURL = `photos/` + i + `.jpg`;
  const randomDescIndex = getRandomPositiveInteger(0, Desc.length - 1);
  const randomLikes = getRandomPositiveInteger(15, 200);
  const createComments = () => {
    const CommentId = arrayId.length + 1;
    arrayId.push(1);
    const v = getRandomPositiveInteger(1, 6);
    const randomAvatar = `img/avatar-` + v + `.svg`;
    const randomMessIndex = getRandomPositiveInteger(0, Messages.length - 1);
    return {
      id: CommentId,
      avatar: randomAvatar,
      message: Messages[randomMessIndex],
      name: NAMES[randomNameIndex],
    };
  };
  return {
    id: randomID,
    url: randomURL,
    description: Desc[randomDescIndex],
    likes: randomLikes,
    comments: createComments(),
  };
};

const similarPosts = Array.from({length: 25}, createPost);

console.log(
  similarPosts
)
