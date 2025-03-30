import compareEbay from "./compairePrices/compaireEbay";
import compareAmazon from "./compairePrices/compaireAmazon.js";
import compareNewEgg from "./compairePrices/compaireNewEgg.js";

const compairePrice = async (url, webSite) => {
    try {
        let mainProduct;
        let comparisons = {};

        switch (webSite.toLowerCase()) {
            case "amazon":
                comparisons.ebay = await compareEbay(mainProduct.name);
                comparisons.newegg = await compareNewEgg(mainProduct.name);
                break;

            case "ebay":
                comparisons.amazon = await compareAmazon(mainProduct.name);
                comparisons.newegg = await compareNewEgg(mainProduct.name);
                break;

            case "newegg":
                comparisons.amazon = await compareAmazon(mainProduct.name);
                comparisons.ebay = await compareEbay(mainProduct.name);
                break;

            default:
                throw new Error("Unsupported website. Supported websites: Amazon, eBay, Newegg.");
        }

        return {
            mainProduct,
            comparisons
        };
    } catch (error) {
        console.error("Error comparing price:", error.message);
        return null;
    }
};

export default compairePrice;
