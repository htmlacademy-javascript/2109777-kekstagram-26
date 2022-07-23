//Модуль со вспомогательными функциями

//Функция выдает рандомное число
function getRandomPositiveInteger (startNumber, endNumber) {
  const lower = Math.ceil(Math.min(Math.abs(startNumber), Math.abs(endNumber)));
  const upper = Math.floor(Math.max(Math.abs(startNumber), Math.abs(endNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {getRandomPositiveInteger};
