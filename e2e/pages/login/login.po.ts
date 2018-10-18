import { browser, by, element, $ } from 'protractor';

export class LoginPage {
    loginBtn;
    email;
    password;
    submitBtn;
    private credentias = {
        username: 'test.neoito@gmail.com',
        password: 'qwerty@1234'
    };
    constructor() {
        this.loginBtn = element(
            by.css(
                'button.index--nav--2dHWq.index--_btn--9nYKH.tabbed-pane--tab--1gyCN.tabbed-pane--_tab--3YIY3.index--standard--3U4zZ'
            )
        );

        this.email = $('[type=email]');
        this.password = $('[type=password]');
        this.submitBtn = element(
            by.css('button.index--primary--P14pO.index--_btn--9nYKH.form--primary-button--1NgrB.index--standard--3U4zZ')
        );
    }
    fillCredentials(credentias: any = this.credentias) {
        this.email.sendKeys(credentias.username);
        this.password.sendKeys(credentias.password);
        this.submitBtn.click();
    }

    urlChanged(url) {
        return function() {
            return browser.getCurrentUrl().then(function(actualUrl) {
                return url != actualUrl;
            });
        };
    }
}
