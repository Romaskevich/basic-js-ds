const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.ROOT = null;
  }

  root() {
    return this.ROOT;
  }

  add(data) {
    this.ROOT = toAdd(this.ROOT, data);

    function toAdd(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = toAdd(node.left, data);
      } else {
        node.right = toAdd(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return toHas(this.ROOT, data);

    function toHas(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ? toHas(node.left, data) : toHas(node.right, data);
    }
  }

  find(data) {
    return toFind(this.ROOT, data);

    function toFind(node, data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
      return data < node.data ? toFind(node.left, data) : toFind(node.right, data);
    }
  }

  remove(data) {
    this.ROOT = toRemove(this.ROOT, data);

    function toRemove(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = toRemove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = toRemove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = toRemove(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.ROOT) {
      return null;
    }

    let current = this.ROOT;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.ROOT) {
      return null;
    }
    
    let current = this.ROOT;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};