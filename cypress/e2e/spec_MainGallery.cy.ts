describe('Main Gallery component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25',
      { fixture: 'records.json' }
    ).as('getRecords');
    cy.visit('http://localhost:3000/');
  });

  it('should navigate to Main Gallery when link is clicked', () => {
    cy.get('.MainGallery-button').click();
    cy.url().should('include', '/MainGallery');
    cy.get('.MainGallery-Title').should('contain', 'Main Gallery');
  });

  it('should display the main gallery with art cards', () => {
    cy.get('.MainGallery-button').click();
    cy.url().should('include', '/MainGallery');
    cy.wait('@getRecords');
    cy.get('.main-gallery').should('exist');
    cy.get('.MainGallery-Title').should('contain', 'Main Gallery');
    cy.get('.card').should('have.length', 2)
  });

  it('should handle fetch errors gracefully', () => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25', {
      statusCode: 500
    }).as('getArtRecordsError');

    cy.get('.MainGallery-button').click();
    cy.url().should('include', '/MainGallery');
    cy.wait('@getArtRecordsError');
    cy.get('.main-gallery').should('contain', 'Failed to fetch records');
  });
});
