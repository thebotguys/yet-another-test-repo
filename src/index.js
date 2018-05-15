import semanticApi, * as api from './api'
import semanticRpc, * as rpc from './rpc'
import * as CONST from './consts'
import semanticSc, * as sc from './sc'
import semanticTx, * as tx from './transactions'
import semanticWallet, * as wallet from './wallet'
import * as u from './utils'
import semanticSettings, * as settings from './settings'
import * as logging from './logging'

const mods = [semanticSc, semanticTx, semanticWallet, semanticApi, semanticRpc, semanticSettings]

const Lix = mods.reduce((lix, mod) => {
  Object.keys(mod).map((key) => {
    if (lix[key]) Object.assign(lix[key], mod[key])
    else lix[key] = mod[key]
  })
  return lix
}, { CONST, u })

export default Lix
export {
  api,
  rpc,
  sc,
  tx,
  wallet,
  u,
  CONST,
  settings,
  logging
}
