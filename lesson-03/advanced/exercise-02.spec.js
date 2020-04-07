describe('Advanced exercise 02', () => {
  it('Should return correct answer', () => {
    chai.expect(isValid('{[(][)(()(}{}[]]]}')).to.eql(false);
  });

  it('Should return correct answer', () => {
    chai.expect(isValid('{([()(){}({})])}')).to.eql(true);
  });
});
