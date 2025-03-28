import Puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

Puppeteer.use(StealthPlugin());

const compareNewEgg = async (title) => {
    const browser = await Puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
            "--proxy-server=38.154.227.167:5868,"
        ]
    });

    try {
        const page = await browser.newPage();

        // Set a realistic User-Agent
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        );

        // Set extra headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.google.com/",
        });
        await page.authenticate({
            username: "username",
            password: "password"
        })

        // Open Newegg
        await page.goto("https://www.newegg.com", { waitUntil: "networkidle2", timeout: 90000 });

        // Perform search
        await page.locator(".header2021-search-box input").fill(title);
        await page.locator(".ico.ico-search").click();
        await page.waitForSelector(".item-cell .item-container .item-info .item-title");

        // Scrape data with error handling
        let productTitle, image, price, subPrice, priceFinal;

        try {
            productTitle = await page.$eval(".item-cell .item-container .item-info .item-title", el => el.innerText.trim());
        } catch {
            console.error("❌ Product title not found.");
            console.log(JSON.stringify({ error: "Product title is missing", code: 404 }));
            return;
        }

        try {
            image = await page.$eval(".item-cell .item-container .item-img img", el => el.src);
        } catch {
            console.error("❌ Product image not found.");
            console.log(JSON.stringify({ error: "Product image is missing", code: 404 }));
            return;
        }

        try {
            price = await page.$eval(".item-cell .item-container .price .price-current strong", el => el.innerText.trim());
            subPrice = await page.$eval(".item-cell .item-container .price .price-current sup", el => el.innerText.trim());
            priceFinal = price + subPrice;
        } catch {
            console.error("❌ Price not found.");
            console.log(JSON.stringify({ error: "Product price is missing", code: 404 }));
            return;
        }

        // Format response
        const productInfo = {
            success: true,
            code: 200,
            data: { productTitle, image, price: priceFinal, platformName: "Newegg" }
        };

        console.log(JSON.stringify(productInfo));

    } catch (error) {
        console.error("❌ Scraping Error:", error.message);
        console.log(JSON.stringify({ error: error.message, code: 500 }));
    } finally {
        if (browser) await browser.close();
    }
};

export default compareNewEgg;
