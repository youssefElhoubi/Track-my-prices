import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export const scrapAmazon = async (url) => {

    const browser = await puppeteer.launch({ headless: true });
    try {
        const page = await browser.newPage();
        // Set a random user-agent
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

        // Set extra headers to look like a real user
        await page.setExtraHTTPHeaders({
            "accept-language": "en-US,en;q=0.9",
            "upgrade-insecure-requests": "1",
        });


        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });

        await page.waitForSelector(".price--currentPriceText--V8_y_b5");

        // Extract the price text
        const productPrice = await page.$eval(".price--currentPriceText--V8_y_b5", el => el.innerText);

        console.log("📌 Extracted spans:", spans);
        // const productTitle = await page.$eval(".product-title-word-break", el => el.innerText);
        // const productImage = await page.$eval("#landingImage", el => el.src);
        // console.log(holePrice);


        // if (!productTitle && !holePrice && !productImage) {
        //     console.log(JSON.stringify({ error: "No product data found", code: 404 }));
        //     return;
        // }

        // const productInfo = {
        //     success: true,
        //     code: 200,
        //     data: { productTitle, holePrice, productImage }
        // };

        // console.log(JSON.stringify(productInfo));

    } catch (error) {
        console.log(JSON.stringify({ error: error.message, code: 500 }));
    } finally {
        if (browser) await browser.close();
    }
};

// Running the Function just for testing 
scrapAmazon(process.argv[2]);
