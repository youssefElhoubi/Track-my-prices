import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

const scrapNewEgg = async (url) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
        ]
    });
    try {
        const page = await browser.newPage();
        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 90000,
        });
        // Set a realistic user-agent
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36"
        );

        // Set extra headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
        });

        const price = await page.$eval(".price-new-right .price-current strong", el => el.innerText);
        const sub = await page.$eval(".price-new-right .price-current sup", el => el.innerText);
        const title = await page.$eval(".product-title", el => el.innerText);
        const image = await page.$eval(".product-view-img-original", el => el.src);
        const fullPrice = price + sub

        const productInfo = {
            title,
            image,
            fullPrice
        }
        // the product scraped data 
        console.log(JSON.stringify({
            productInfo,
            status: 200
        }));
    } catch (error) {
        console.error({
            status: "error",
            message: error.message,
        });
    } finally {
        await browser.close();
    }

};
scrapNewEgg(process.argv[2]);