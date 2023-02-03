import Cart from "../pages/Cart"
 
 const cart = new Cart()
 let addToCartPrice
 let cartPrice
  
 describe("Go to ph eats", () => {
   beforeEach(() => {
     cart.visit()
   })
   
   Cypress.on('uncaught:exception', (err, runnable) => 
   {
         return false
   })
  
   it("should Check Prices", () => {
      cart.getAddCartButton().click({force: true})
      cart.getCartDetailsPrice().then(($atdPrice) => 
      {
      const latdPrice = $atdPrice.text()
      cy.log(latdPrice)
      addToCartPrice = latdPrice.parseInt
      })

 
   })
  
 })