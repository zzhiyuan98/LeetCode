/*
4. 寻找两个正序数组的中位数

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

算法的时间复杂度应该为 O(log (m+n)) 。
*/

const findMedianSortedArrays = (nums1, nums2) => {
  const m = nums1.length;
  const n = nums2.length;
  const find = (start1, start2, k) => {
    const len1 = m - start1;
    const len2 = n - start2;
    if (len1 === 0) return nums2[start2 + k - 1];
    if (len2 === 0) return nums1[start1 + k - 1];
    if (k === 1) return Math.min(nums1[start1], nums2[start2]);
    const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
    const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
    if (nums1[i] < nums2[j]) return find(i + 1, start2, k - (i - start1 + 1));
    return find(start1, j + 1, k - (j - start2 + 1));
  };
  const left = Math.floor((m + n + 1) / 2);
  const right = Math.floor((m + n + 2) / 2);
  return (find(0, 0, left) + find(0, 0, right)) / 2;
};

// expected output: 2
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
