class Helper{

    async swipeUp(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(2,5)');
    }

    async swipeDown(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(2,5)');
    }

}
export default new Helper();