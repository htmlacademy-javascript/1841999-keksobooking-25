function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Минимальное число не может быть больше максимального!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(2, 4));

function getRandomFloat(min, max, num) {
  if (min >= max) {
    throw new Error('Минимальное число не может быть больше максимального!');
  }
  return Number((Math.random() * (max - min) + min).toFixed(num));
}

console.log(getRandomFloat(2, 3, 2));
