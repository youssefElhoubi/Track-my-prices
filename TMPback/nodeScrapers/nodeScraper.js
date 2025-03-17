import puppeteer from "puppeteer";
import { scrapAmazon } from "./scrapamazon";
import scrapeAliExpressPrice from "./scrapAli";

async function scrapeWebsite(url) {
    const supportedWebsides = ["www.amazon.com","www.aliexpress.com","www.ebay.com"]
    URLinfo = new URL(url);
    indexOfWebSide = supportedWebsides.indexOf(URLinfo.host);
    if (indexOfWebSide == -1) {
        const error = "this webside is not supported";
        console.log(JSON.stringify(error));
        return;
    }
    indexOfWebSide == 0 ? scrapAmazon(url):"";
    indexOfWebSide == 1 ? scrapeAliExpressPrice(url):"";


}

scrapeWebsite(process.argv[2]);
