function getRandomArbitrary(min, max, num) {
  if (min >= max) {
    alert('Минимальное число не может быть больше максимального!');
  }
  return (Math.random() * (max - min) + min).toFixed(num);
}

console.log(getRandomArbitrary(2, 3, 2));
