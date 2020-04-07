describe('Exercise 02', () => {
  it('Should return the most frequent array item', () => {
    chai.expect(mostFrequent(['one', 'one', 'two'])).to.eql('one');
  });

  it('Should return the most frequent array item', () => {
    chai.expect(mostFrequent([])).to.eql(null);
  });

  it('Should return the most frequent array item', () => {
    chai.expect(mostFrequent([1, 2, 0, 3, 5, 1, 0, 0, 2, 4, 2, 3, 3, 2, 1, 5, 2, 0, 0, 0, 0, 0, 0, 4, 1, 2, 5, 1, 0, 2])).to.eql(0);
  });

  it('Should return the most frequent array item', () => {
    chai.expect(mostFrequent([1, 2, 1, 2, 3])).to.eql(1);
  });

  it('Should return the most frequent array item', () => {
    let member1 = {name: 'Vasya'};
    let member2 = {name: 'Petya'};
    let member3 = {name: 'Kolya'};
    chai.expect(mostFrequent([member1, member1, member2, member3])).to.eql(member1);
  });
});
