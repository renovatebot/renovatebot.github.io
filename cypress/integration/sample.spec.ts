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
  it('previous and next button works', () => {
    let nextUrl: any, prevUrl: any;
    cy.get('.md-footer__link--next')
      .should('have.attr', 'href')
      .then((href) => {
        nextUrl = href;
      });
    cy.get('.md-footer__link--next').click();
    cy.location().should((loc) => {
      expect(loc.href.includes(nextUrl)).to.eq(true);
    });
    cy.get('.md-footer__link--prev')
      .should('have.attr', 'href')
      .then((href) => {
        prevUrl = href;
        console.log(prevUrl);
      });
    cy.get('.md-footer__link--prev').click();
    cy.location().should((loc) => {
      if (prevUrl === '../..') prevUrl = '/';
      expect(loc.href.includes(prevUrl)).to.eq(true);
    });
  });
});
