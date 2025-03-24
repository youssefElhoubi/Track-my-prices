import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import useProxy from "puppeteer-page-proxy";

puppeteer.use(StealthPlugin());

const compareAmazon = async (title) => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
            "--proxy-server=38.154.227.167:5868,"
        ]
    });

    try {
        const page = await browser.newPage();
        await page.authenticate({
            username: 'cptjffkd',
            password: 'f0i56dktc42r',
        });

        // Set a realistic User-Agent
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        );

        // Set extra headers to avoid bot detection
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.google.com/",
        });

        await page.goto("https://www.amazon.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
        await page.locator("#twotabsearchtextbox").fill(title);
        await page.locator("#nav-search-submit-button").click();
        await page.waitForSelector('[data-cy="title-recipe"] h2 span', { timeout: 5000 });
        const elementTitle = await page.$eval(`[data-cy="title-recipe"] h2 span`, el => el.innerText);
        const elementPrice = await page.$eval(`.a-price .a-offscreen`, el => el.innerText);

        const elementImage = await page.$eval(`.s-image`, el => el.src);
        const productInof = {
            title: elementTitle,
            price: elementPrice,
            image: elementImage
        }

        console.log(JSON.stringify(productInof));
        // Close browser
    } catch (error) {
        console.error("❌ Error:", error);
        await browser.close();
    }finally{
        await browser.close();
    }
};

// Example usage
const amazonURL = process.argv[2] || "https://www.amazon.com/";
compareAmazon(amazonURL);
