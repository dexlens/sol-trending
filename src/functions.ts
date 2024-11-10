import { log } from "./shared/log.ts";

export { log };
/**
 * Track market cap of tokens
 * @description This function is used to track the market cap of tokens.
 */
export { trackMarketCap } from "./shared/trackMarketCap/index.ts";

/**
 * Fetch new trending tokens
 */
export { 
    fetchNewTrendingTokens, 
    sendToTelegramTrendingTokens, 
    sendTrendingMessageToTelegram
 } from "./shared/fetchNewTrendingTokens/index.ts";
