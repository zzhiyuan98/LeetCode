var verifyPostorder = function(postorder) {
  const n = postorder.length;
  if (!n) {
    return true;
  }
  const root = postorder[n - 1];
  const i = postorder.findIndex(value => value > root);
  const left = i === -1 ? postorder.slice(0, n - 1) : postorder.slice(0, i);
  const right = i === -1 ? [] : postorder.slice(i, n - 1);
  if (right.some(v => v < root)) {
    return false;
  }
  return verifyPostorder(left) && verifyPostorder(right);
};

const postorder = [1,2,5,10,6,9,4,3];
console.log(verifyPostorder(postorder));
