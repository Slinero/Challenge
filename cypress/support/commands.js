Cypress.Commands.add('hacerElCheckout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Marcos')
    cy.get('[data-test="lastName"]').type('Test')
    cy.get('[data-test="postalCode"]').type('1234')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
})

Cypress.Commands.add('realizarLogout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
})