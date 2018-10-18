import { LandingPage } from '../pages/landing/landing.po';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login/login.po';

describe('Signup', () => {
    let landingPage: LandingPage;
    let loginPage: LoginPage;
    it('press Login button to signup', () => {
        landingPage = new LandingPage();
        landingPage.navigateTo();
        landingPage.login.click();
        expect(browser.getCurrentUrl()).toEqual(
            'https://auth.udacity.com/sign-up?next=https://classroom.udacity.com/authenticated'
        );
    });
    it('Signin from  the Login page', () => {
        loginPage = new LoginPage();
        browser.wait(function() {
            return loginPage.loginBtn.isPresent().then(function(result) {
                return result;
            });
        }, 20000);
        loginPage.loginBtn.click();
        browser.sleep(1000);

        browser.wait(function() {
            return loginPage.email.isPresent().then(function(result) {
                return result;
            });
        }, 20000);
        loginPage.fillCredentials();
        browser.wait(
            loginPage.urlChanged(
                'https://auth.udacity.com/sign-in?next=https%3A%2F%2Fclassroom.udacity.com%2Fauthenticated'
            ),
            10000
        );
        browser.wait(loginPage.urlChanged('https://classroom.udacity.com/authenticated'), 10000);
        browser.sleep(10000);
        expect(browser.getCurrentUrl()).toEqual('https://classroom.udacity.com/me');
    });
});
