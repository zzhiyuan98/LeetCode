const isSimilar = (A, B) => {
  if (!B) {
    return true;
  }
  if (!A) {
    return false;
  }
  if (A.val === B.val) {
    return isSimilar(A.left, B.left) && isSimilar(A.right, B.right);
  }
};

const isSubStructure = function(A, B) {
  if (!A || !B) {
    return false;
  }
  if (isSimilar(A, B)) {
    return true;
  }
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
