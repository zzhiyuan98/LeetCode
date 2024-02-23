/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  return isPalindromeHelper(s.toLowerCase().replace(/[^A-Za-z0-9]/g, ''));

  function isPalindromeHelper(s) {
    const n = s.length
    if (n === 0 || n === 1) {
      return true;
    }
    return s[0] === s[n - 1] && isPalindromeHelper(s.substring(1, n - 1));
  }
};
