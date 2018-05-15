import * as lixDB from './lixDB'
import * as cmc from './coinmarketcap'
import * as nep5 from './nep5'
import * as lixscan from './lixscan'
import * as core from './core'
/**
 * @typedef {object} History
 * @property {string} address - Address.
 * @property {string} name - API name.
 * @property {string} net - 'MainNet' or 'TestNet'
 * @property {PastTx[]} history - List of past transactions.
 */

/**
 * @typedef {object} PastTx
 * @property {number} LIXR - Lixr involved.
 * @property {number} LIX - LIX involved.
 * @property {number} block_index - Block index.
 * @property {boolean} lixr_sent - Was LIXR sent.
 * @property {boolean} lix_sent - Was LIX sent.
 * @property {string} txid - Transaction ID.
 */

export default {
  get: {
    price: cmc.getPrice,
    prices: cmc.getPrices,
    balance: lixDB.getBalance,
    claims: lixDB.getClaims,
    transactionHistory: lixDB.getTransactionHistory,
    tokenBalance: nep5.getTokenBalance,
    tokenInfo: nep5.getTokenInfo,
    token: nep5.getToken
  },
  do: {
    sendAsset: lixDB.doSendAsset,
    claimAllLixr: lixDB.doClaimAllLixr,
    mintTokens: lixDB.doMintTokens
  },
  sendAsset: (config) => core.sendAsset(config),
  claimLixr: (config) => core.claimLixr(config),
  doInvoke: (config) => core.doInvoke(config)
}

export * from './core'
export * from './switch'
export { lixDB, cmc, nep5, lixscan }
