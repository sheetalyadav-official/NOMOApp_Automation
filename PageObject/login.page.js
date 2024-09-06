const sleep = ms => new Promise(res => setTimeout(res, ms));
import loginResiOS from '../Resources/iOS/loginRes.json'
import loginResAndroid from '../Resources/Android/loginRes.json'
import helperAndroid from '../Resources/Android/helper.js'

//To get the location for different platforms on the basis of command provided
let resource,Helper;
if (process.argv[4] === '--iOS') {
    resource = loginResiOS;
}
else if (process.argv[4] === '--Android') {
    resource = loginResAndroid;
    Helper=helperAndroid;
}

class LoginPage {

    get swagLabsLogo() {
        return $(resource.locator.swagLabsLogo)
    }

    get roboImageOnLogin() {
        return $(resource.locator.roboImageOnLogin)
    }

    get usernameInput() {
        return $(resource.locator.usernameInput)
    }

    get passwordInput() {
        return $(resource.locator.passwordInput)
    }

    get loginButton() {
        return $(resource.locator.loginButton)
    }

    get usernameInfoTextOnLogin() {
        return $(resource.locator.usernameInfoTextOnLogin)
    }

    get standardUsername() {
        return $(resource.locator.standardUsername)
    }

    get lockedUsername() {
        return $(resource.locator.lockedUsername)
    }

    get problemUsername() {
        return $(resource.locator.problemUsername)
    }

    get passwordInfoTextOnLogin() {
        return $(resource.locator.passwordInfoTextOnLogin)
    }

    get defaultPassword() {
        return $(resource.locator.defaultPassword)
    }

    get errorMessage() {
        return $(resource.locator.errorMessage)
    }

    get productHeaderBar() {
        return $(resource.locator.productHeaderBar)
    }

    //Test Methods

    //Terimate the app is it is launched and launch it again
    async launchApp() {
        await driver.terminateApp("com.swaglabsmobileapp");
        await driver.activateApp("com.swaglabsmobileapp");
    }

    //To verify all the elements are visible on login screen
    async verifyLoginElementsVisibility() {
        await expect(this.swagLabsLogo).toBeDisplayed();
        await expect(this.roboImageOnLogin).toBeDisplayed();
        await expect(this.usernameInput).toBeDisplayed();
        await expect(this.passwordInput).toBeDisplayed();
        await expect(this.loginButton).toBeDisplayed();
        await Helper.swipeUp();
        this.usernameInfoTextOnLogin.waitForDisplayed({ timeout: 5000, interval: 1000 });
        await expect(this.usernameInfoTextOnLogin).toBeDisplayed();
        await expect(this.standardUsername).toBeDisplayed();
        await expect(this.lockedUsername).toBeDisplayed();
        await expect(this.problemUsername).toBeDisplayed();
        await expect(this.passwordInfoTextOnLogin).toBeDisplayed();
        await expect(this.problemUsername).toBeDisplayed();
        await Helper.swipeDown();
    }

    //To verify if the app is launched or not
    async verifyAppIsLaunched() {
        this.loginButton.waitForDisplayed({ timeout: 20000, interval: 1000 });
        const currentPackage = await driver.getCurrentPackage();
        const expectedPackage = 'com.swaglabsmobileapp';
        expect(currentPackage).toEqual(expectedPackage);

    }

    //Swipe up the screen and click on standand user link
    async clickOnStandardUserLink() {
        await Helper.swipeUp();
        await this.standardUsername.click();
        await Helper.swipeDown();

    }

    //Swipe up the screen and click on Problem user link
    async clickOnProblemUserLink() {
        await Helper.swipeUp();
        await this.problemUsername.click();
        await Helper.swipeDown();

    }

    //Swipe up the screen and click on Locked user link
    async clickOnLockedUserLink() {
        await Helper.swipeUp();
        await this.lockedUsername.click();
        await Helper.swipeDown();

    }

    //Verify if the username textfield is populated with the credentials
    async verifyUserFieldValueStandard(standardUser) {
        let username = await this.standardUsername.getText();
        await expect(username).toBe(standardUser);

    }

    //Verify if the username textfield is populated with the credentials
    async verifyUserFieldValueProblem(problemUser) {
        let username = await this.problemUsername.getText();
        await expect(username).toBe(problemUser);
    }

    //Verify if the username textfield is populated with the credentials
    async verifyUserFieldValueLocked(lockedUser) {
        let username = await this.lockedUsername.getText();
        await expect(username).toBe(lockedUser);
    }


    //Enter Username and Password on Login Screen
    async inputUsernameAndPassword(username, password) {
        this.usernameInput.waitForDisplayed({ timeout: 5000, interval: 1000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    //Click on Login Button
    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    //Verify error message is displayed
    async verifyErrorMessage() {
        await expect(this.errorMessage).toBeDisplayed();
    }

    //Verify Dashboard Screen is displayed
    async verifyDashboardVisibility() {
        await expect(this.productHeaderBar).toBeDisplayed();
    }

}

export default new LoginPage();