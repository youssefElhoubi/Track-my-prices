import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import path from "path";
import { fileURLToPath } from "url";

puppeteer.use(StealthPlugin());

const scrapeAliExpressPrice = async (url) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToExtension = path.join(__dirname, "2captcha-solver")
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
            `--disable-extentions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`,
            "--proxy-server=38.154.227.167:5868,"
        ],
    });
    try {
        const page = await browser.newPage();
        await page.authenticate({
            username: 'cptjffkd',
            password: 'f0i56dktc42r',
        })

        // Set a realistic user-agent
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36"
        );

        // Set extra headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
        });

        console.log("🚀 Navigating to AliExpress...");
        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 90000,
        });

        console.log("✅ Page loaded. Extracting product price...");

        // Wait for the price element to appear
        await page.waitForSelector(".price--currentPriceText--V8_y_b5", {
            timeout: 30000,
        });
        // By default, waitForSelector waits for 30 seconds, but this time is usually not enough, so we specify the timeout value manually with the second parameter. The timeout value is specified in "ms".
        await page.waitForSelector(`.captcha-solver["data-state="solved"]`, { timeout: 180000 })

        // Extract the price text
        const productPrice = await page.$eval(
            ".price--currentPriceText--V8_y_b5",
            (el) => el.innerText
        );

        console.log(`💰 Product Price: ${productPrice}`);

        
        return {
            status: "success",
            price: productPrice,
        };
    } catch (error) {
        console.error("❌ Scraping Failed:", error.message);
        return {
            status: "error",
            message: error.message,
        };
    }finally{
        await browser.close();
    }
};
export default scrapeAliExpressPrice;

// Replace with an actual AliExpress product URL
scrapeAliExpressPrice(process.argv[2]);
    