import { browser, by, element } from 'protractor';

export class LandingPage {
    login;
    constructor() {
        this.login = element(
            by.cssContainingText(
                'div.normal.ng-star-inserted > a.button.button--navigation.ng-star-inserted',
                ' Log In '
            )
        );
    }
    navigateTo() {
        browser.ignoreSynchronization = true;
        return browser.get('https://in.udacity.com/');
    }
}
