/* 1812. 判断国际象棋棋盘中一个格子的颜色 */

const squareIsWhite = coordinates => {
  const charCode = coordinates[0].charCodeAt();
  const number = parseInt(coordinates[1]);
  return (charCode + number) % 2 === 1;
};
