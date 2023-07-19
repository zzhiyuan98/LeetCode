var reversePairs = function(nums) {
  let count = 0;
  const mergeSort = (start, end) => {
    if (start > end) {
      return [];
    }
    if (start === end) {
      return [nums[start]];
    }
    const mid = Math.floor(start + (end - start) / 2);
    const left = mergeSort(start, mid);
    const right = mergeSort(mid + 1, end);
    const ans = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        ans.push(left[i]);
        i++;
        count += j;
      }
      else {
        ans.push(right[j]);
        j++;
      }
    }
    if (i < left.length) {
      ans.push(...left.slice(i));
      count += j * (left.length - i);
    }
    if (j < right.length) {
      ans.push(...right.slice(j));
    }
    return ans;
  };
  mergeSort(0, nums.length - 1);
  return count;
};

const nums = [7,5,6,4];
console.log(reversePairs(nums));
