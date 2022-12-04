/* 1796. 字符串中第二大的数字 */

const secondHighest = s => {
    const numbers = new Set();
    for (const char of s) {
        if (char >= "0" && char <= "9") numbers.add(parseInt(char));
    }
    const sortedArray = Array.from(numbers).sort().reverse();
    return sortedArray[1] === undefined ? -1 : sortedArray[1];
};

console.log(secondHighest("ck077"));
