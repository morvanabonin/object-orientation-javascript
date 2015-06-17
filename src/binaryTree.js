var binaryTree = function() {
	var root,
		left,
		right;
}

binaryTree.prototype.setRoot = function(root) {
	this.root = root;
}

binaryTree.prototype.getRoot = function() {
	return this.root;
}

binaryTree.prototype.setLeft = function(left) {
	this.left = left;
}

Object.defineProperty(o, 'b', {
	get: function { return left },
	set: function(left) { this.left = left; }
});
//binaryTree.prototype.getLeft = function() {
//	return this.left;
//}

binaryTree.prototype.setRight = function(right) {
	this.right = right;
}

binaryTree.prototype.getRight = function() {
	return this.right;
}

binaryTree.prototype.insert = function(x) {
	console.log(x);
	if (x != 'undefined') {
		this.insert(x.left);
		console.log(x);
		this.insert(x.getRight());
	}

}

var arrayTree = [2, 3, 4, 5, 6, 7, 8];
var binary_tree = new binaryTree();

for (i = 0; i < arrayTree.length; i++) {
	binary_tree.setRoot(arrayTree[i]);
	binary_tree.insert(binary_tree.getRoot());
}

