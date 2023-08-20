var search = function(arr, target) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (arr[left] === target) return left;
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      right = mid;
    }
    else if (arr[mid] > arr[left]) {
      if (target >= arr[left] && target < arr[mid]) right = mid - 1;
      else left = mid + 1;
    }
    else if (arr[mid] < arr[left]) {
      if (target > arr[mid] && target <= arr[right]) left = mid + 1;
      else right = mid - 1;
    }
    else {
      left++;
    }
  }
  return -1;
};

const arr = [2,1,2,2,2];
const target = 1;
console.log(search(arr, target));
