import puppeteer from "puppeteer";
import { scrapAmazon } from "./scrapamazon";

async function scrapeWebsite(url) {
    const supportedWebsides = ["www.amazon.com","www.aliexpress.com","www.ebay.com"]
    URLinfo = new URL(url);
    indexOfWebSide = supportedWebsides.indexOf(URLinfo.host);
    if (indexOfWebSide == -1) {
        const error = "this webside is not supported";
        console.log(JSON.stringify(error));
    }
    if (indexOfWebSide==0) {
        scrapAmazon(url)
    }

}

scrapeWebsite(process.argv[2]);
