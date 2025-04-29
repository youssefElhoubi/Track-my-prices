import compareEbay from "./compairePrices/compaireEbay.js";
import compareAmazon from "./compairePrices/compaireAmazon.js";
import compareNewEgg from "./compairePrices/compaireNewEgg.js";

const compairePrice = async (productTitle, webSite) => {
    try {
        // console.log(productTitle, webSite);
        
        let mainProduct;
        let comparisons = {};

        switch (webSite.toLowerCase()) {
            case "amazon":
                comparisons.ebay = await compareEbay(productTitle);
                comparisons.newegg = await compareNewEgg(productTitle);
                break;

            case "ebay":
                comparisons.amazon = await compareAmazon(productTitle);
                comparisons.newegg = await compareNewEgg(productTitle);
                break;

            case "newegg":
                comparisons.amazon = await compareAmazon(productTitle);
                comparisons.ebay = await compareEbay(productTitle);
                break;

            default:
                throw new Error("Unsupported website. Supported websites: Amazon, eBay, Newegg.");
        }
        console.log(JSON.stringify(comparisons));
    } catch (error) {
        console.error("Error comparing price:", error.message);
        return null;
    }
};

compairePrice(process.argv[2], process.argv[3]);