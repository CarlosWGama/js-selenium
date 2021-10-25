const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('login', () => {

    let driver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://selenium.cwg.services');
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('logado com sucesso', async () => {

        //Login
        await driver.findElement(By.id('input-email')).sendKeys('teste@teste.com');
        await driver.findElement(By.id('input-password')).sendKeys('123456');
        await driver.findElement(By.id('btn-login')).click();

        const url = await driver.getCurrentUrl();
        assert.equal(url, 'http://selenium.cwg.services/home');
    })

    it ('falha ao logar', async () => {
        //Login
        await driver.findElement(By.id('input-email')).sendKeys('teste@teste.com');
        await driver.findElement(By.id('input-password')).sendKeys('1111111111');
        await driver.findElement(By.id('btn-login')).click();

        try {
            const error = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[2]/p'));
        } catch(erro) {
            assert.fail('Não encontrou opção')
        }
    })
})