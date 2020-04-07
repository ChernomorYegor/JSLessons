describe('Exercise 03', () => {
  it('Specified node should be deleted', () => {
    const node3 = {val: 1, next: null};
    const node2 = {val: 1, next: node3};
    const node1 = {val: 1, next: node2};

    deleteNode(node2);

    chai.expect(node1.next).to.eql(node3);
  });
});
