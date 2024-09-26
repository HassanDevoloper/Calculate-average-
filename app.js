function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }

  let average = sum / numbers.length;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log(`The average is: ${average}`);
