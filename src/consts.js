
export const ADDR_VERSION = '17'

export const ASSETS = {
  LIX: 'LIX',
  '27eb309da37829ec523c01ac3ffbc7a26179ad1b38004945075b2c7b056f64bb': 'LIX',
  LIXR: 'LIXR',
  '2d97551e5f306fca9e81f44913138dccfc6d9d3ba97eb7be647b753b4c53a57a': 'LIXR'
}

export const ASSET_ID = {
  LIX: '27eb309da37829ec523c01ac3ffbc7a26179ad1b38004945075b2c7b056f64bb',
  LIXR : '2d97551e5f306fca9e81f44913138dccfc6d9d3ba97eb7be647b753b4c53a57a'
}

export const CONTRACTS = {
  TRADE_ITEMS : "ee4ccacdd9c41843efbd6eee083143f509bca540"
}

export const DEFAULT_RPC = {
  MAIN: 'https://ec2-18-184-85-210.eu-central-1.compute.amazonaws.com:10331',
  TEST: 'https://ec2-18-184-85-210.eu-central-1.compute.amazonaws.com:20331'
}

export const DEFAULT_REQ = { jsonrpc: '2.0', method: 'getblockcount', params: [], id: 1234 }

export const DEFAULT_SCRYPT = {
  cost: 16384,
  blockSize: 8,
  parallel: 8,
  size: 64
}

export const DEFAULT_SYSFEE = {
  enrollmentTransaction: 1000,
  issueTransaction: 500,
  publishTransaction: 500,
  registerTransaction: 10000
}

export const DEFAULT_WALLET = {
  name: 'myWallet',
  version: '1.0',
  scrypt: {},
  accounts: [],
  extra: null
}

export const DEFAULT_ACCOUNT_CONTRACT = {
  'script': '',
  'parameters': [
    {
      'name': 'signature',
      'type': 'Signature'
    }
  ],
  'deployed': false
}

export const LIX_NETWORK = {
  MAIN: 'MainNet',
  TEST: 'TestNet'
}

// specified by nep2, same as bip38
export const NEP_HEADER = '0142'

export const NEP_FLAG = 'e0'

export const RPC_VERSION = '2.3.2'

export const TX_VERSION = {
  'CLAIM': 0,
  'CONTRACT': 0,
  'INVOCATION': 1
}
