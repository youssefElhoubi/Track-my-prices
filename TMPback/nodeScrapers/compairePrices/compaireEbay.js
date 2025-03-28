import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const compaireEbay = async (title) => {
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
        ],
    });
    try {
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36");
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.google.com/",
            "Upgrade-Insecure-Requests": "1",
            "DNT": "1",  // Do Not Track request header
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Accept-Encoding": "gzip, deflate, br",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        })
        await page.goto("https://www.ebay.com", {
            waitUntil: "networkidle2",
            timeout: 90000,
        });
        await page.locator("#gh-ac").fill(title);
        await page.locator("#gh-search-btn").click();
        await page.waitForSelector(".srp-river-results.clearfix");
        const productImage = await page.$eval("ul>li.s-item.s-item__pl-on-bottom img",el => el.src);
        const productTitle = await page.$eval("ul>li.s-item.s-item__pl-on-bottom .s-item__title",el => el.innerText);
        const productPrice = await page.$eval("ul>li.s-item.s-item__pl-on-bottom .s-item__price",el => el.innerText.split("$")[1]);

        console.log(productPrice);
        

    } catch (error) {
        console.log(error);
    } finally {
        await browser.close()
    }
}
compaireEbay(process.argv[2]);