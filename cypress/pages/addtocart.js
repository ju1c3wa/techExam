class Cart {
  constructor() {
    this.url = "https://central.ph/eats"
    this.title = "Cart"  
  }
 
  visit() {
    cy.visit(this.url)
  }

  getOpenCartButton() {
    return cy.get('[data-cy="img-eats-landing-parent-37014"]')
  }
 
  getCartDetailsPrice() {
    return cy.get('.srn-cart-details-price')
  }

  getAddToCartItemName() {
    return cy.get('.srn-cart-details-name')
  }
  
  getAddCart() {
    return cy.get('.srn-button')
  }

  getEnterLocation() {
    return cy.get('#query-ft-modal-location')
  }

  getSelectLocation() {
    return cy.get('#ui-id-2 ')
  }

  getConfirmLocation() {
    return cy.get('#Delivery > .srn-ft-proceed-btn')
  }

  getClickBarangayDropdown() {
    return cy.get(':nth-child(6) > .dropdown > .srn-ft-input' , { timeout: 10_000 })
  }

  getSelectBarangay() {
    return cy.get(':nth-child(6) > .dropdown > .srn-ft-brgy-dropdown-menu > .srn-location-select-container > .srn-location-scrollable-list-container > .list-group > :nth-child(1)' , { timeout: 10_000 })
  }

  getEnterHouseAddress() {
    return cy.get('#srn-ft-house_no-ft-modal-location' , { timeout: 10_000 })
  }

  getConfirmLocationButton() {
    return cy.get('#Delivery > .srn-ft-proceed-btn' , { timeout: 10_000 })
  }

  getOpenCartImageIcon() {
    return cy.get('a > img')
  }
  getAddedToCartPrice() {
    return cy.get('.srnt-cart-item-price')
  }

  getCartItemName() {
    return cy.get('.srnt-cart-item-title')
  }




}
 
module.exports = Cart