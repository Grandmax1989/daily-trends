import { getManager } from "typeorm";
import { Feed } from "../models/feed.entity";

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

            await this.persistFeeds(webElements);
        } catch (err) {
            console.log(err);
        }

        await browser.close();
        console.log("Browser Closed");
    }

    async fetchElMundo() {
        try {
            // open the headless browser
            var browser = await puppeteer.launch({ headless: true });
            // open a new page
            var page = await browser.newPage();
            // enter url in page
            await page.goto(`https://www.elmundo.es/ultimas-noticias.html`);

            // const test = await page.$eval('.story_card', (e: any) => e.innerHTML);
            const webElements = await page.evaluate(() => {
                const elements = Array.from(document.querySelectorAll('.auto-items > .content-item'));
                return elements.map(e => ({
                    title: e.querySelector('.mod-title > a').innerHTML,
                    // Elements have no description
                    // body: e.querySelector('.description') ? e.querySelector('.description').innerHTML : '',
                    image: e.querySelector('img') ? e.querySelector('img').src : '',
                    source: (e.querySelector('.mod-title > a') as HTMLLinkElement).href,
                    publisher: 'El Mundo',
                })).slice(0, 5);
            });

            await this.persistFeeds(webElements);
        } catch (err) {
            console.log(err);
        }
        await browser.close();
        console.log("Browser Closed");
    }
    async persistFeeds(feeds: Feed[]) {
        const feedRepository = getManager().getRepository(Feed);

        return Promise.all(feeds.map(
            async feed => {
                const exists = await feedRepository.findOne({ title: feed.title, publisher: feed.publisher });
                console.log(exists)
                if (!exists) {
                    const feedItem = new Feed();
                    Object.assign(feedItem, feed);
                    feedItem.createdAt = new Date();
                    await feedRepository.save(feedItem);
                }
            }
        ))
    }
}

