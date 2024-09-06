import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../PageObject/login.page'

Given('the app is launched and user is on login screen', async () => {
    await LoginPage.launchApp();
    await LoginPage.verifyAppIsLaunched();
});

When('user click on Standard user', async () => {
    await LoginPage.clickOnStandardUserLink();
});

Then('username and password textfield must be populated with {string} credentials', async (user)=> {
    await LoginPage.verifyUserFieldValueStandard(user);
});

When('user click on Problem user', async () => {
    await LoginPage.clickOnProblemUserLink();
});

Then('username and password textfield must be populated with {string} credentials', async (user) => {
    await LoginPage.verifyUserFieldValueProblem(user);
});

When('user click on Locked user', async () => {
    await LoginPage.clickOnLockedUserLink();
});

Then('username and password textfield must be populated with "<string>" credentials', async (user) => {
    await LoginPage.verifyUserFieldValueLocked(user);
});

Then('user should see a error message', async () => {
    await LoginPage.verifyErrorMessage();
});

Then('user is logged in and can view dashboard screen', async () => {
    await LoginPage.verifyDashboardVisibility();
});

Then('user should see all the login elements', async () => {
    await LoginPage.verifyLoginElementsVisibility();
});

When('user enters {string} and {string}', async (username, password) => {
    await LoginPage.inputUsernameAndPassword(username,password);
});

When('user click on login button', async () => {
    await LoginPage.clickOnLoginButton();
});

Then('the user should see a screen and message according to login {string}', async (status) => {
    if(status==="Failure"){
    await LoginPage.verifyErrorMessage();
    }
    else if(status==="Success"){
    await LoginPage.verifyDashboardVisibility();
    }
});