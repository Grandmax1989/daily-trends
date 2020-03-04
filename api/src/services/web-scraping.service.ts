// import {InjectConnection} from "typeorm-typedi-extensions";

const puppeteer = require("puppeteer");


export class WebScrappingService {
    
    async fetchElPais() {
        try {
            // open the headless browser
            var browser = await puppeteer.launch({ headless: true });
            // open a new page
            var page = await browser.newPage();
            // enter url in page
            await page.goto(`https://elpais.com/ultimas-noticias/`);
    
            // const test = await page.$eval('.story_card', (e: any) => e.innerHTML);
            const webElements = await page.evaluate(() => {
                const elements = Array.from(document.querySelectorAll('.story_card'));
                return elements.map(e => ({
                    title: e.querySelector('.headline > a').innerHTML,
                    body: e.querySelector('.description') ? e.querySelector('.description').innerHTML : '',
                    image: e.querySelector('img') ? e.querySelector('img').src : '',
                    source: (e.querySelector('.headline > a') as HTMLLinkElement).href,
                    publisher: 'El País',
                })).slice(0, 5);
            });
            return webElements
        } catch (err) {
            console.log(err);
        }
    
        await browser.close();
        console.log("Browser Closed");
    }
}

