import Home from "../pages/Home"
 
 const home = new Home()
  
 describe("testing home page", () => {
   it("should visit home page", () => {
    Cypress.on('uncaught:exception', (err, runnable) => 
    {
          return false
    })
     home.visit()
   })
  
   it("should search for a product", () => {
     home.searchInput("iphone")
     home.getSearchButton().click()
   })
 })