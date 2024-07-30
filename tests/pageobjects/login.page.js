import { $, browser } from '@wdio/globals'

const MENU_TAB = '~open menu';
const MENU_LOGIN_OPTION = '~menu item log in';
const USER_ID = '~Username input field';
const USER_PASS = '~Password input field';
const LOGIN_Button = '~Login button';
const USER_ID_ERROR = '~Username-error-message';
const PASS_ERROR = '~Password-error-message';
const WRONG_CREDENTIALS_ERROR = '~generic-error-message';
const MENU_LOGOUT_OPTION = '~menu item log out'
const LOGOUT_BUTTON = '//android.widget.Button[@resource-id="android:id/button1"]';
const LOGGEDOUT_MESSAGE = '//android.widget.TextView[@resource-id="android:id/alertTitle"]';

class MainPage {    
get menuTab (){
    return $(MENU_TAB);
}

get menuLoginOption() {
    return $(MENU_LOGIN_OPTION);
}

get userID() {
    return $(USER_ID);
}

get userPass() {
    return $(USER_PASS);
}

get loginButton() {
    return $(LOGIN_Button);
}

get userIdError() {
    return $(USER_ID_ERROR);
}

get passError() {
    return $(PASS_ERROR);
}

get wrongcredentialError() {
    return $(WRONG_CREDENTIALS_ERROR);
}

get menuLogoutOption () {
    return $(MENU_LOGOUT_OPTION);
}

get logoutButton() {
    return $(LOGOUT_BUTTON);
}

get loggedOutMessage() {
    return $(LOGGEDOUT_MESSAGE);
}

}
export default new MainPage();