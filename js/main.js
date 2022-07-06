function getRandomPositiveInteger (startNumber, endNumber) {
  const lower = Math.ceil(Math.min(Math.abs(startNumber), Math.abs(endNumber)));
  const upper = Math.floor(Math.max(Math.abs(startNumber), Math.abs(endNumber)));
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

const DESCS = [
  'Люблю фоточки',
  'Хочу на море',
  'Котики - моя жизнь',
  'Стакан наполовину полон',
  'Стакан наоплоивну пуст',
  'Пустышка этот стакан',
  'Стакан не пустой',
  'Жизнь продолжается',
];

const MESSAGES = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAXS_POSTS = 25;

const commentIds = [];

const createPost = () => {
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomId = getRandomPositiveInteger(1, MAXS_POSTS);
  const randomUrlNumber = getRandomPositiveInteger(1, MAXS_POSTS);
  const randomUrl = `photos/${randomUrlNumber}.jpg`;
  const randomDescIndex = getRandomPositiveInteger(0, DESCS.length - 1);
  const randomLikes = getRandomPositiveInteger(15, 200);
  const createComment = () => {
    const commentId = commentIds.length + 1;
    commentIds.push(1);
    const randomAvatarNumber = getRandomPositiveInteger(1, 6);
    const randomAvatar = `img/avatar-${randomAvatarNumber}.svg`;
    const randomMessIndex = getRandomPositiveInteger(0, MESSAGES.length - 1);
    return {
      id: commentId,
      avatar: randomAvatar,
      message: MESSAGES[randomMessIndex],
      name: NAMES[randomNameIndex],
    };
  };
  const similarComments = Array.from({length: getRandomPositiveInteger(1, 50)}, createComment);
  return {
    id: randomId,
    url: randomUrl,
    description: DESCS[randomDescIndex],
    likes: randomLikes,
    comments: similarComments,
  };
};

const similarPosts = Array.from({length: 25}, createPost);

console.log(
  similarPosts
)