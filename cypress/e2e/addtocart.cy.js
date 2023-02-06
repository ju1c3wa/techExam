import Cart from "../pages/addtocart"
 
 const cart = new Cart()
 



 describe("Go to ph eats", () => {
   beforeEach(() => {
     cart.visit()
   })
   
   Cypress.on('uncaught:exception', (err, runnable) => 
   {
         return false
   })

   it("should Check Item Name and Prices", () => {
      cy.wait(2000)
      cart.getOpenCartButton().click({force: true})
      cart.getCartDetailsPrice().then($addPrice => {
      let cartAddedPrice = $addPrice.text()
      cy.log(cartAddedPrice)
      cy.wrap(cartAddedPrice).as('cartAddedPrice')
      })
      cart.getAddToCartItemName().then($addCartItemName =>{
        let addToCartItemName = $addCartItemName.text()
        cy.log(addToCartItemName)
        cy.wrap(addToCartItemName).as('addToCartItemName')
      })
      cy.wait(5000)
      cart.getAddCart().click()
      cy.wait(2000)
      cart.getEnterLocation().type('Taguig, Metro Manila, Philippines')
      cart.getSelectLocation().click({force: true})
      cart.getConfirmLocation().click()
      cy.wait(5000)
      cart.getConfirmLocation().click()
      cy.wait(1000)
      cart.getClickBarangayDropdown().click()
      cart.getSelectBarangay().click()
      cart.getEnterHouseAddress().type('Test')
      cart.getConfirmLocationButton().click()
      cy.wait(2000)
      cart.getOpenCartImageIcon().click()
      cart.getAddedToCartPrice().then($inCartPrice => {
      let insideCartPrice = $inCartPrice.text()
      cy.log(insideCartPrice)
      cy.wrap(insideCartPrice).as('insideCartPrice')
      })
      cart.getCartItemName().then($cartItemName => {
      let insideCartItemName = $cartItemName.text()
      cy.log(insideCartItemName)
      cy.wrap(insideCartItemName).as('insideCartItemName')
      })  
      cy.get('@cartAddedPrice').then(cartAddedPrice => { 
        cy.log(cartAddedPrice)
        cy.get('@insideCartPrice').then(insideCartPrice => { 
        expect(cartAddedPrice).to.equal(insideCartPrice)
      })
      })
     cy.get('@addToCartItemName').then(addToCartItemName => { cy.log(addToCartItemName)
     cy.get('@insideCartItemName').then(insideCartItemName => { 
        expect(insideCartItemName).to.equal(addToCartItemName)
      })
      })
    })
 })