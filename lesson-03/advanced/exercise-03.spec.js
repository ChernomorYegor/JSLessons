describe('Advanced exercise 03', () => {
  it('Should remove duplicates 1', () => {
    const node3 = {val: 1, next: null};
    const node2 = {val: 1, next: node3};
    const node1 = {val: 1, next: node2};

    removeDuplicates(node1);

    chai.expect(node1.val).to.eql(1);
    chai.expect(node1.next).to.eql(null);
  });

  it('Should remove duplicates 2', () => {
    const node3 = {val: 2, next: null};
    const node2 = {val: 1, next: node3};
    const node1 = {val: 1, next: node2};

    removeDuplicates(node1);

    chai.expect(node1.val).to.eql(1);
    chai.expect(node1.next.val).to.eql(2);
    chai.expect(node1.next.next).to.eql(null);
  });
});
