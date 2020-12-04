describe('Task', () => {
    it('Add first element', () => {
      cy.visit('')
      cy.get('#content')
        .contains('Add Element')  
        .click()
      cy.get('#elements')
        .children()
        .should('have.length', 1)
    })

    it('Add second element', () => {
        cy.get('#content')
          .contains('Add Element')  
          .click()
        cy.get('#elements')
          .children()
          .should('have.length', 2)
    })

    it('Delete first element', () => {
        cy.get('#elements')
          .contains('Delete')
          .click()
        cy.get('#elements')
          .children()
          .should('have.length', 1)
    })

    it('Delete first element', () => {
        cy.get('#elements')
          .contains('Delete')
          .click()
        cy.get('#elements')
          .children()
          .should('have.length', 0)
    })
  })