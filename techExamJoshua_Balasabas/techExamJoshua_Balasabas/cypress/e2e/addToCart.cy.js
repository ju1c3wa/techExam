
describe('Checks the amount from add to cart to view cart', () => {
  it('passes', () => {

     let addToCartPrice
     let cartPrice


    cy.visit('https://central.ph/eats')


    Cypress.on('uncaught:exception', (err, runnable) => 
    {
          return false
    })
    cy.wait(4000)
  
    cy.get('[data-cy="img-eats-landing-parent-37014"]').click({force:true})

    cy.wait(2000)
    cy.get('.srn-cart-details-price').then(($atdPrice) => 
    {
    const latdPrice = $atdPrice.text()
    cy.log(latdPrice)
    addToCartPrice = latdPrice.parseInt
    })
    cy.wait(2000)
    cy.get('.srn-button').click()
    cy.wait(2000)
    cy.get('#query-ft-modal-location').type('Taguig, Metro Manila, Philippines')
    cy.wait(2000)
    cy.get('#ui-id-2').click({force: true})
    cy.get('#Delivery > .srn-ft-proceed-btn').click()
    cy.wait(5000)
    cy.get('#Delivery > .srn-ft-proceed-btn').click()
    cy.wait(2000)
    cy.get(':nth-child(6) > .dropdown > .srn-ft-input').click()
    cy.wait(2000)
    cy.get(':nth-child(6) > .dropdown > .srn-ft-brgy-dropdown-menu > .srn-location-select-container > .srn-location-scrollable-list-container > .list-group > :nth-child(1)').click()
    cy.wait(2000)
    cy.get('#srn-ft-house_no-ft-modal-location').type('Test')
    cy.wait(2000)
    cy.get('#Delivery > .srn-ft-proceed-btn').click()
    cy.wait(2000)
    cy.get('a > img').click()
    cy.wait(2000)
    
    cy.get('.srnt-cart-item-price').then(($cprice) => 
    {
    const lcPrice = $cprice.text()
    cy.log(cartPrice)
    cartPrice = lcPrice.parseInt
    })



    assert(cartPrice == addToCartPrice, "Passed");
  })
})