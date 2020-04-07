describe('Exercise 01', () => {
  it('Should return unique members', () => {
    chai.expect(unique(['one', 'one', 'two'])).to.eql(['one', 'two']);
  });

  it('Should return empty result', () => {
    chai.expect(unique([])).to.eql([]);
  });

  it('Should return unique members', () => {
    chai.expect(unique([1, 1, 4, '5'])).to.eql([1, 4, '5']);
  });

  it('Should return unique members', () => {
    let member1 = {name: 'Vasya'};
    let member2 = {name: 'Petya'};
    let member3 = {name: 'Kolya'};

    chai.expect(unique([member1, member1, member2, member3, member3, member2])).to.eql([member1, member2, member3]);
  });
});
