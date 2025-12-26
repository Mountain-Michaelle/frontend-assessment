import { WalletOption } from "@/app/types/formData";

export const WALLET: WalletOption[] = [
  { symbol: "Metamask", name: "metamask", icon: "./wallet_symbols/metamask.svg" },
  { symbol: "Rainbow", name: "rainbow", icon: "./wallet_symbols/rainbow.svg" },
  { symbol: "WalletConnect", name: "walletconnect", icon: "./wallet_symbols/wallets.svg" },
  { symbol: "Connect Other Wallet", name: "walletconnect", icon: "./wallet_symbols/others.svg" },  
];
