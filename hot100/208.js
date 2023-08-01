/*
208. 实现 Trie (前缀树)

Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix，返回 true；否则，返回 false。
 */

var Trie = function() {
  this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.children;
  for (const char of word) {
    if (!node[char]) return false;
    node = node[char];
  }
  return !!node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children;
  for (const char of prefix) {
    if (!node[char]) return false;
    node = node[char];
  }
  return true;
};
