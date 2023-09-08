import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Add Product to Cart', () =>{
    loginPage.login(URL,'standard_user','secret_sauce')
    cartPage.cartSauceLabsBackpack()
    cartPage.cartDetail() 
})

it('Test Continue Shopping', () =>{
    loginPage.login(URL,'standard_user','secret_sauce')
    cartPage.cartSauceLabsBackpack()
    cartPage.cartDetail()
    cartPage.continueShopping()
    dashboardPage.sauceLabsBackpack()
})


