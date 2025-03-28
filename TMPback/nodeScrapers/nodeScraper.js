import scrapAmazon from "./scrapers/scrapamazon.js";
import scrapeAliExpressPrice from "./scrapers/scrapAli.js";
import scrapNewEgg from "./scrapers/scrapNewEgg.js";
import scrapEbay from "./scrapers/scrapEbay.js";

async function scrapeWebsite(url) {
    try {
        const supportedWebsides = ["www.amazon.com", "www.aliexpress.com", "www.ebay.com", "www.newegg.com"];
        const URLinfo = new URL(url);
        const indexOfWebSide = supportedWebsides.indexOf(URLinfo.host);


        if (indexOfWebSide === -1) {
            console.log(JSON.stringify("Error: This website is not supported."));
            return;
        }

        if (indexOfWebSide === 0) {
            await scrapAmazon(url);
        } else if (indexOfWebSide === 1) {
            await scrapeAliExpressPrice(url);
        } else if (indexOfWebSide === 3) {
            await scrapNewEgg(url);
        } else if(indexOfWebSide === 2 ){
            await scrapEbay(url);
        }
        else {
            console.error("Error: No valid scraping function found.");
        }
    } catch (error) {
        console.error("Scraping Error:", error.message);
    }
}

scrapeWebsite(process.argv[2]);