import Puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

Puppeteer.use(StealthPlugin());

const compareNewEgg = async (title) => {
    const browser = await Puppeteer.launch({
        headless: false,
        args: ["--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled"
        ]
    });
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
    
    await page.goto("https://www.newegg.com",{waitUntil:"networkidle2",timeout:900000});

    await page.locator(".header2021-search-box input").fill(title);
    await page.locator(".ico.ico-search").click();
    await page.waitForSelector(".item-cell .item-container .item-info .item-title");
    
    const Ptitle = await page.$eval(".item-cell .item-container .item-info .item-title",el=>el.innerText);
    const image = await page.$eval(".item-cell .item-container .item-img img",el=>el.src);
    const price = await page.$eval(".item-cell .item-container .price .price-current strong ",el=>el.innerText);
    const subPrice = await page.$eval(".item-cell .item-container .price .price-current sup",el=>el.innerText);
    const priceFinal = price +"."+ subPrice;
    console.log({
        title:Ptitle,
        image:image,
        price:priceFinal
    });
    
}
compareNewEgg(process.argv[2]);