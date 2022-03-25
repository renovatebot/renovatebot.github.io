describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('https://docs.renovatebot.com/'); //change link when testing locally
  });
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
