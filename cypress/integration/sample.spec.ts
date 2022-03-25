describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/'); //change link when testing locally
  });

  it('search field working', () => {
    cy.get('.md-search__input').type('config').should('have.value', 'config');
  });
  it('toggle light/dark mode', () => {
    cy.get('[data-md-color-scheme="default"]');
    cy.get('.md-header__option').click();
    cy.get('[data-md-color-scheme="slate"]');
  });
});
