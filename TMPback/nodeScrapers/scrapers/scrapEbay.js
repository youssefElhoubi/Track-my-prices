import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

const scrapEbay = async (url) => {
    const browser = await puppeteer.launch({
        headless: true, // Runs in headless mode for efficiency
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
        ],
    });

    try {
        const page = await browser.newPage();

        // Set user agent to mimic real users
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36"
        );

        // Set headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
        });

        // Navigate to the eBay product page
        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 90000,
        });

        // Scrape product title
        let productTitle;
        try {
            productTitle = await page.$eval("#mainContent .vim .vim h1 span", el => el.innerText.trim());
        } catch (error) {
            console.error("❌ Product title not found.");
            console.log(JSON.stringify({ error: "Product title is missing", code: 404 }));
            return;
        }

        // Scrape product price
        let productPrice;
        try {
            productPrice = await page.$eval(
                "#mainContent .x-price-section .x-bin-price__content div span",
                el => el.innerText.replace(/[^0-9.]/g, "") // Extracts numeric price only
            );
        } catch (error) {
            console.error("❌ Price not found.");
            console.log(JSON.stringify({ error: "Product price is missing", code: 404 }));
            return;
        }

        // Scrape product image
        let productImage;
        try {
            productImage = await page.$eval(".image img", el => el.src);
        } catch (error) {
            console.error("❌ Product image not found.");
            console.log(JSON.stringify({ error: "Product image is missing", code: 404 }));
            return;
        }

        // Construct the response JSON
        const productInfo = {
            success: true,
            code: 200,
            data: { productTitle, productPrice, productImage, platformName: "eBay" }
        };

        console.log(JSON.stringify(productInfo));

    } catch (error) {
        console.error("❌ Scraping Error:", error.message);
        console.log(JSON.stringify({ error: error.message, code: 500 }));
    } finally {
        if (browser) await browser.close();
    }
};

export default scrapEbay;
