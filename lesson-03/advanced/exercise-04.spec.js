describe('Advanced exercise 04', () => {
  it('Should remove adjacent duplicates 1', () => {
    chai.expect(removeAdjacentDuplicates('abbaca')).to.eql('ca');
  });

  it('Should remove adjacent duplicates 2', () => {
    chai.expect(removeAdjacentDuplicates('zedcbaabcde')).to.eql('z');
  });
});
