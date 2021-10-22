const { Builder, By } = require('selenium-webdriver')

async function teste() {
    //new Builder().forBrowser().build() = Cria uma conexão com o navegador
    //Outras opções para forBrowser: chrome|opera|firefox|MicrosoftEdge
    const driver = await new Builder().forBrowser('MicrosoftEdge').build();
    //get = Abre a página no link informato
    await driver.get('http://selenium.cwg.services');

    const text = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[2]/span'));
    console.log(await text.getText());

    // //Digita uma informação no input
    // input.sendKeys('digita um texto')

    // //Cicla no item
    // btn.click();

}

teste();

