describe('home page', () => {
  it('successfully get result from search input and view 1st item', () => {
    cy.visit('http://192.168.1.5:5173');

    cy.get('#test-id-input').type('Star Wars');

    cy.get('#test-id-btn').click();

    cy.get('#simple-tabpanel-1 > .MuiBox-root > :nth-child(1)').click();
  });
});
