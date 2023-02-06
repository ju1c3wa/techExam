import Cart from "../pages/addtocart"
 
 const cart = new Cart()
 
 let addToCartPrice
 let cartPrice
 let addToCartItemName
 let cartItemName
  
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
      cart.getCartDetailsPrice().then(($addPrice) => 
      {
      const cartAddedPrice = $addPrice.text()
      cy.log(cartAddedPrice)
      addToCartPrice = cartAddedPrice.parseInt
      })
      cart.getAddToCartItemName().then(($addItemName) =>
      {
        const addCartItemName = $addItemName.text()
        cy.log(addCartItemName)
        addToCartItemName = addCartItemName
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
      cart.getAddedToCartPrice().then(($inCartPrice) => 
      {
      const insideCartPrice = $inCartPrice.text()
      cy.log(insideCartPrice)
      cartPrice = insideCartPrice.parseInt
      })
      cart.getCartItemName().then(($cartItemName) => 
      {
      const insideCartItemName = $cartItemName.text()
      cy.log(insideCartItemName)
      cartItemName = insideCartItemName
      })

      cy.getCartDetailsPrice().should('have.value', addToCartPrice)
   })
  
 })