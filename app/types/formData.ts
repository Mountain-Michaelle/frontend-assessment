export type CryptoSymbol = "USDT-CELO" | "USDT-TON" | "USDT-BNB" | "USDT" | "NGN" ;

export type Walletsymbol = "Metamask" |  "Rainbow" | "WalletConnect" | "Connect Other Wallet" | null

export interface Tabs {
  title:string
  id: number 
 } 

 
export interface BaseOption<TSymbol extends string> {
  symbol: TSymbol;
  icon: string;
}


export interface WalletOption {
  symbol: Walletsymbol;
  name: string;
  icon: string;
}

export interface CryptoOption {
  symbol: CryptoSymbol;
  name: string;
  icon: string; 
}

export interface ConversionFormState {
  payAmount: number;
  payCrypto: CryptoSymbol;
  receiveAmount: number;
  sendCrypto: Walletsymbol;
  receivingWallet: Walletsymbol
  receiveCrypto: CryptoSymbol;
}

export interface EmailFormState {
  email: string;
}
