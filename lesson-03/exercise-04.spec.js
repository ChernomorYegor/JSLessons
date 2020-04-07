describe('Exercise 04', () => {
  it('Node should be added correctly 1', () => {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};

    addItem(node1, 1, 11);

    chai.expect(node1.next).to.eql({val: 11, next: node2});
  });
});
