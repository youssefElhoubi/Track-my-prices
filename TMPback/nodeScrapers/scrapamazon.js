    import puppeteer from "puppeteer-extra";
    import StealthPlugin from "puppeteer-extra-plugin-stealth";

    puppeteer.use(StealthPlugin());

    const scrapAmazon = async (url) => {

        const browser = await puppeteer.launch({
            headless: false,
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

            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });

            const holePrice = await page.$eval(".a-offscreen", el => el.innerText);
            const productTitle = await page.$eval(".product-title-word-break", el => el.innerText);
            const productImage = await page.$eval("#landingImage", el => el.src);

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
    export default scrapAmazon
    // Running the Function just for testing 
    // scrapAmazon(process.argv[2]);
