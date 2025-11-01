'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import MintInfo from './components/MintInfo' 
import MintForm from './components/MintForm'  // ← добавили

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_#2563eb_0%,_transparent_60%)]" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_#9333ea_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center p-6">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-white/10 ring-1 ring-white/10" />
          <h1 className="text-2xl font-semibold tracking-tight">FROC — Mint</h1>
          <p className="mt-1 text-sm text-white/70">Base mainnet • secure connect first</p>
        </div>

        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.35)] backdrop-blur">
          <div className="mb-4 flex items-center justify-between text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Ready to connect
            </span>
            <span className="opacity-80">Network: Base</span>
          </div>

          <div className="flex items-center justify-center">
            <ConnectButton accountStatus="address" chainStatus="name" showBalance={false} />
          </div>

          {/* ↓↓↓ Добавили блок с on-chain данными ↓↓↓ */}
          <MintInfo />
          <MintForm />
        </div>

        <div className="mt-6 flex gap-4 text-xs text-white/60">
          <a className="hover:text-white/90" href="#">Contract</a>
          <span>•</span>
          <a className="hover:text-white/90" href="#">BaseScan</a>
          <span>•</span>
          <a className="hover:text-white/90" href="#">OpenSea</a>
        </div>
      </div>
    </main>
  )
}
