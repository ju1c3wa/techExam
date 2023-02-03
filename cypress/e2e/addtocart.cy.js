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
      
      cart.getOpenCartButton().click({force: true})
      cy.wait(2000)
      cart.getCartDetailsPrice().then(($addPrice) => 
      {
      const cartAddedPrice = $addPrice.text()
      cy.log(cartAddedPrice)
      addToCartPrice = cartAddedPrice.parseInt
      })
      cy.wait(2000)
      cart.getAddToCartItemName().then(($addItemName) =>
      {
        const addCartItemName = $addItemName.text()
        cy.log(addCartItemName)
        addToCartItemName = addCartItemName
      })
      cy.wait(2000)
      cart.getAddCart().click()
      cy.wait(1000)
      cart.getEnterLocation().type('Taguig, Metro Manila, Philippines')
      cy.wait(5000)
      cart.getSelectLocation().click({force: true})
      cy.wait(2000)
      cart.getConfirmLocation().click()
      cy.wait(5000)
      cart.getConfirmLocation().click()
      cy.wait(2000)
      cart.getClickBarangayDropdown().click()
      cy.wait(3000)
      cart.getSelectBarangay().click()
      cy.wait(2000)
      cart.getEnterHouseAddress().type('Test')
      cy.wait(2000)
      cart.getConfirmLocationButton().click()
      cy.wait(2000)
      cart.getOpenCartImageIcon().click()
      cy.wait(2000)
      cart.getAddedToCartPrice().then(($inCartPrice) => 
      {
      const insideCartPrice = $inCartPrice.text()
      cy.log(insideCartPrice)
      cartPrice = insideCartPrice.parseInt
      })
      cy.wait(2000)
      cart.getCartItemName().then(($cartItemName) => 
      {
      const insideCartItemName = $cartItemName.text()
      cy.log(insideCartItemName)
      cartItemName = insideCartItemName
      })

      assert(cartPrice == addToCartPrice, "Passed");
      assert(addToCartItemName == cartItemName, "Passed");
   })
  
 })