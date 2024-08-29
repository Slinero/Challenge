describe('Prueba 1', { testIsolation: false }, () => {
  it('Login con el usuario “standard_user”', () => {
      cy.clearLocalStorage()
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  })
  it('Agregar los productos al carrito', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('Hacer el checkout', () => {
      cy.hacerElCheckout()
  })

  it('Validar que se haya realizado el checkout', () => {
      cy.contains('Thank you for your order!').should('be.visible')
      cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
  })

  it('Realizar el logout', () => {
      cy.realizarLogout()
  })
})

describe('Prueba 2', { testIsolation: false }, () => {
  it('Login con el usuario problem_user”', () => {
      cy.clearLocalStorage()
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('problem_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  })

  it('Agregar los productos al carrito', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('Hacer el checkout', () => {
      cy.hacerElCheckout()
  })
  
  it('Validar que se haya realizado el checkout', () => {
      cy.contains('Thank you for your order!').should('be.visible')
      cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
  })

  it('Realizar el logout', () => {
      cy.realizarLogout()
  })
})
