export class CartPage{
    buttonCart = 'Add to cart'

    cartSauceLabsBackpack(){
        cy.contains(this.buttonCart).click()
        cy.contains('Remove').should('be.visible') 
    }

    cartDetail(){
        cy.window().scrollTo('top')
        cy.wait(5000) 
        cy.get('.shopping_cart_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        
    }

    continueShopping(){
        cy.contains('Continue Shopping').should('be.visible')
        cy.get('#continue-shopping').click()
    }


}