import puppeteer from "puppeteer";

export const scrapAmazon = async (url) => {

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });

        const holePrice = await page.$eval(".a-offscreen", el => el.innerText).catch(() => null);
        const productTitle = await page.$eval(".product-title-word-break", el => el.innerText).catch(() => null);
        const productImage = await page.$eval("#landingImage", el => el.src).catch(() => null);

        if (!productTitle && !holePrice && !productImage) {
            console.log(JSON.stringify({ error: "No product data found", code: 404 }));
            return;
        }

        const productInfo = {
            success: true,
            code: 200,
            data: { productTitle, holePrice, productImage }
        };

        console.log(JSON.stringify(productInfo));

    } catch (error) {
        console.log(JSON.stringify({ error: error.message, code: 500 }));
    } finally {
        if (browser) await browser.close();
    }
};

// Running the Function just for testing 
scrapAmazon(process.argv[2]);
