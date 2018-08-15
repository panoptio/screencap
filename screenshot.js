const CREDS = require('./creds');
const puppeteer = require('puppeteer');
const extra_params = 'kiosk=true'

const login_page = 'https://login.newrelic.com/login'
const USERNAME_SELECTOR = '#login_email';
const PASSWORD_SELECTOR = '#login_password';
const BUTTON_SELECTOR = '#login_submit';
var base_uri = 'https://insights.newrelic.com/accounts/' + CREDS.accountid + '/dashboards/'

var dashboards = {
    "661669" : "dashboard_1",
    "661648" : "dashboard_2",
    "661653" : "dashboard_3",
    }

async function run() {
    const browser = await puppeteer.launch({
        headless: false
        });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1200});  
    await page.goto(login_page);
    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    await page.click(BUTTON_SELECTOR);

    for(var dashboard in dashboards) {
        await page.waitFor(1*1000);
        await page.goto(base_uri + dashboard + '?' + extra_params);
        await page.waitFor(5*1000);
        await page.screenshot({ path: 'screenshots/' + dashboards[dashboard] + '.png' });
    }

    browser.close();
}

run();