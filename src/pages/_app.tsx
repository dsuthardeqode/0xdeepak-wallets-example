import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provider, WalletProvider } from '@0xdeepak/wallets'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </Web3Provider>)
}
