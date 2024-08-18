
const { test } = require('@playwright/test');
const { default: LoginPage } = require('./pages/LoginPage.js');

test('Login admin', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('admin')
  await loginPage.eneterPassword('admin')
  await loginPage.clickLogin()
  await loginPage.checkSuccessLogin()
  await loginPage.clickLogout()
});

test('Login aqa', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('aqa')
  await loginPage.eneterPassword('AQA123')
  await loginPage.clickLogin()
  await loginPage.checkSuccessLogin()
  await loginPage.clickLogout()
});

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('test')
  await loginPage.eneterPassword('test123')
  await loginPage.clickLogin()
  await loginPage.checkSuccessLogin()
  await loginPage.clickLogout()
});

test('Cross Login aqa', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('aqa')
  await loginPage.eneterPassword('test123')
  await loginPage.clickLogin()
  await loginPage.checkFailedPassword()
});

test('Cross Login admin', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('admin')
  await loginPage.eneterPassword('AQA123')
  await loginPage.clickLogin()
  await loginPage.checkFailedPassword()
});

test('Cross Login test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('test')
  await loginPage.eneterPassword('admin')
  await loginPage.clickLogin()
  await loginPage.checkFailedPassword()
});

test('Registry Login aqa', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('AQA')
  await loginPage.eneterPassword('AQA123')
  await loginPage.clickLogin()
  await loginPage.checkFailedLogin()
});

test('Registry Login admin', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('admin')
  await loginPage.eneterPassword('ADMIN')
  await loginPage.clickLogin()
  await loginPage.checkFailedPassword()
});

test('Registry Login test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('TEST')
  await loginPage.eneterPassword('test123')
  await loginPage.clickLogin()
  await loginPage.checkFailedLogin()
});

test('Login with Space', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername('admin ')
  await loginPage.eneterPassword('admin')
  await loginPage.clickLogin()
  await loginPage.checkSuccessLogin()
  await loginPage.clickLogout()
});

test('Invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername("admin1")
  await loginPage.eneterPassword("admin1")
  await loginPage.clickLogin()
  await loginPage.checkFailedLogin()
});

test('Empty Login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterPassword("admin")
  await loginPage.clickLogin()
  await loginPage.checkFailedLogin()
});

test('Empty Password', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.eneterUsername("admin")
  await loginPage.clickLogin()
  await loginPage.checkFailedPassword()
});


test('Empty Login and Password', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.clickLogin()
  await loginPage.checkFailedLogin()
});

test('Got to Welcome Page', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoWelcomePage()
});

