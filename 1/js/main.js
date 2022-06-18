
function getRandomIntInclusive(min, max) {
    if (max > min && min >= 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    return console.log('Не пройдет, используй другие числа');
}
getRandomIntInclusive();

function countSimbols () {
  console.log(''.length)
}

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
