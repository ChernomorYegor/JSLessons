// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

const deleteNode = function(node) {
	if (node == null || node.next == null ) {
		return null;
	}
	node.val = node.next.val
  	node.next = node.next.next;
};
