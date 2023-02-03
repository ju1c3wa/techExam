class Cart {
  constructor() {
    this.url = "https://central.ph/eats"
    this.title = "Cart"
  }
 
  visit() {
    cy.visit(this.url)
  }
 
  getAddCartButton() {
    return cy.get('[data-cy="img-eats-landing-parent-37014"]')
  }
 
  getCartDetailsPrice() {
    return cy.get('.srn-cart-details-price')
  }
 
}
 
module.exports = Cart