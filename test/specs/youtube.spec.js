describe('Open YouTube', () => {
    it('Should open, deny permission, and search for a video', async () => {
        // Click "Don’t allow" button
        const denyButton = await $('android=new UiSelector().text("Don’t allow")');
        await denyButton.click();

        // Click on the search bar
        const searchIcon = await $('android=new UiSelector().description("Search YouTube")');
        await searchIcon.click();

        // Enter search text
        const searchField = await $('android=new UiSelector().resourceId("com.google.android.youtube:id/search_edit_text")');
        await searchField.setValue('Appium Automation Test');

        // Press Enter key (KeyEvent 66)
        await driver.pressKeyCode(66);

        // Wait for results to load
        await browser.pause(5000);
    });
});
