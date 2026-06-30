describe("Home page", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  it('Search Postcode', function() {
    cy.visit('http://localhost:3000/')
    // Page URL changed.
    cy.url()
      .should('eq', 'http://localhost:3000/')
    // Page title changed. The page title is 'Scout | Discover your next neighbourhood'.
    cy.title()
      .should('eq', 'Scout | Discover your next neighbourhood')
    // The main heading is 'Discover your next neighbourhood'.
    cy.get('h1.c_heading')
      .should('contain.text', 'Discover your next neighbourhood')
    // The 'Explore' button is visible and disabled.
    cy.get('button.c_white')
      .should(($el) => {
        expect($el).to.have.attr('disabled')
        expect($el).to.contain.text('Explore')
      })
    
    
    cy.get('[name="address"]').click();
    cy.get('[name="address"]').type('PO110QW');
    // The postcode input field's value has been updated to 'PO110QW'.
    cy.get('[name="address"]')
      .should('have.value', 'PO110QW')
    // The 'Explore' button is now enabled.
    cy.get('button.c_white')
      .should('not.have.attr', 'disabled')
    
    cy.get('button.c_white').click();
    cy.get('div.flex_1 div:nth-child(2)').click();
    cy.get('div.ai_center.flex_1').click();
    cy.get('div.ai_center.flex_1').click();
  });
});
