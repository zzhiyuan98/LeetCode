var minArray = function(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = numbers[mid];
    if (num < numbers[right]) right = mid;
    else if (num > numbers[right]) left = mid + 1;
    else if (num === numbers[right]) right--;

  }
  return numbers[left];
};

const numbers = [3,4,5,1,2];
console.log(minArray(numbers));
