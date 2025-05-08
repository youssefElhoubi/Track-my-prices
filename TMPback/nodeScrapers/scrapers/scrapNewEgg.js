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

        // Set a realistic user-agent
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36"
        );

        // Set extra headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
        });

        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 90000,
        });


        // Scrape product title
        let productTitle;
        try {
            productTitle = await page.$eval(".product-title", el => el.innerText.trim());
        } catch (error) {
            console.error("❌ Product title not found.");
            console.log(JSON.stringify({ error: "Product title is missing", code: 404 }));
            return;
        }

        // Scrape product image
        let productImage;
        try {
            productImage = await page.$eval(".product-view-img-original", el => el.src);
        } catch (error) {
            console.error("❌ Product image not found.");
            console.log(JSON.stringify({ error: "Product image is missing", code: 404 }));
            return;
        }

        // Scrape product price
        let price, sub;
        try {
            price = await page.$eval(".price-new-right .price-current strong", el => el.innerText.trim());
            sub = await page.$eval(".price-new-right .price-current sup", el => el.innerText.trim());
        } catch (error) {
            console.error("❌ Price not found.");
            console.log(JSON.stringify({ error: "Product price is missing", code: 404 }));
            return;
        }

        const holePrice = price + sub;

        const productInfo = {
            success: true,
            code: 200,
            data: { productTitle, productImage, holePrice,platformName:"NewEgg" }
        };

        console.log(JSON.stringify(productInfo));

    } catch (error) {
        console.error("❌ Scraping Error:", error.message);
        console.log(JSON.stringify({ error: error.message, code: 500 }));
    } finally {
        if (browser) await browser.close();
    }
};

scrapNewEgg(process.argv[2])
export default scrapNewEgg;