import {  browser } from '@wdio/globals'
import loginPage from "../pageobjects/login.page.js"
import loginTestData from '../../testdata/loginTestData.js';
import { WAIT_TIMEOUT } from '../helpers/Constants.js'
describe('launch App', () => {
    beforeEach(async () => {
        await loginPage.menuTab.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isMenuTabDisplayed = await loginPage.menuTab.isDisplayed();
        await expect(isMenuTabDisplayed).toEqual(true);
        await loginPage.menuTab.click();
        await loginPage.menuLoginOption.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isLoginOptDisplayed = await loginPage.menuLoginOption.isDisplayed();
        await expect(isLoginOptDisplayed).toEqual(true);
        await loginPage.menuLoginOption.click();

    });

    it('Verify login without user details', async () => {
         const {uid, PassWord} = loginTestData['noUserDetail'];
         await loginPage.userID.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserIdBoxDiplayed = await loginPage.userID.isDisplayed();
         await expect(isUserIdBoxDiplayed).toEqual(true);
         await loginPage.userID.setValue(uid);
         await loginPage.userPass.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserPassBoxDiplayed = await loginPage.userPass.isDisplayed();
         await expect(isUserPassBoxDiplayed).toEqual(true);
         await loginPage.userPass.setValue(PassWord);
         await loginPage.loginButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isLoginButtonDisplayed = await loginPage.loginButton.isDisplayed();
         await expect(isLoginButtonDisplayed).toEqual(true);
         await loginPage.loginButton.click();
        await loginPage.userIdError.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.userIdError).toBeDisplayed();
     });

     it('Verify login without user password', async () => {
         const {uid, PassWord} = loginTestData['noPassword'];
         await loginPage.userID.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserIdBoxDiplayed = await loginPage.userID.isDisplayed();
         await expect(isUserIdBoxDiplayed).toEqual(true);
         await loginPage.userID.setValue(uid);
         await loginPage.userPass.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserPassBoxDiplayed = await loginPage.userPass.isDisplayed();
         await expect(isUserPassBoxDiplayed).toEqual(true);
         await loginPage.userPass.setValue(PassWord);
         await loginPage.loginButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isLoginButtonDisplayed = await loginPage.loginButton.isDisplayed();
         await expect(isLoginButtonDisplayed).toEqual(true);
         await loginPage.loginButton.click();
        await loginPage.passError.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.passError).toBeDisplayed();
     });

     it('Verify login with wrong credential ', async () => {
         const {uid, PassWord} = loginTestData['inValidInput'];
         await loginPage.userID.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserIdBoxDiplayed = await loginPage.userID.isDisplayed();
         await expect(isUserIdBoxDiplayed).toEqual(true);
         await loginPage.userID.setValue(uid);
         await loginPage.userPass.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isUserPassBoxDiplayed = await loginPage.userPass.isDisplayed();
         await expect(isUserPassBoxDiplayed).toEqual(true);
         await loginPage.userPass.setValue(PassWord);
         await loginPage.loginButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
         const isLoginButtonDisplayed = await loginPage.loginButton.isDisplayed();
         await expect(isLoginButtonDisplayed).toEqual(true);
         await loginPage.loginButton.click();
         await loginPage.wrongcredentialError.waitForDisplayed({timeout: WAIT_TIMEOUT});
         await expect(loginPage.wrongcredentialError).toBeDisplayed();
     });

    it('Verify login page', async () => {
        const {uid, PassWord} = loginTestData['validInput'];
        await loginPage.userID.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isUserIdBoxDiplayed = await loginPage.userID.isDisplayed();
        await expect(isUserIdBoxDiplayed).toEqual(true);
        await loginPage.userID.setValue(uid);
        await loginPage.userPass.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isUserPassBoxDiplayed = await loginPage.userPass.isDisplayed();
        await expect(isUserPassBoxDiplayed).toEqual(true);
        await loginPage.userPass.setValue(PassWord);
        await loginPage.loginButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isLoginButtonDisplayed = await loginPage.loginButton.isDisplayed();
        await expect(isLoginButtonDisplayed).toEqual(true);
        await loginPage.loginButton.click();
        await loginPage.menuTab.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.menuTab).toBeDisplayed();
        await loginPage.menuTab.click();
        await loginPage.menuLogoutOption.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.menuLogoutOption).toBeDisplayed();
        await loginPage.menuLogoutOption.click();
        await loginPage.logoutButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.logoutButton).toBeDisplayed();
        await loginPage.logoutButton.click();
        await loginPage.loggedOutMessage.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginPage.loggedOutMessage).toBeDisplayed();
    });
    })  