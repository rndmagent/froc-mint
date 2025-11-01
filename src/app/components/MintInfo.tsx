'use client'

import { useReadContract } from 'wagmi'
import { formatEther } from 'viem'
import { FROC_ADDRESS, FROC_ABI } from '@/lib/contract'

function Line({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className="text-white/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

export default function MintInfo() {
  const { data: price,   isLoading: lp, error: ep } = useReadContract({ address: FROC_ADDRESS, abi: FROC_ABI, functionName: 'price' })
  const { data: active,  isLoading: la, error: ea } = useReadContract({ address: FROC_ADDRESS, abi: FROC_ABI, functionName: 'mintActive' })
  const { data: frozen,  isLoading: lf, error: ef } = useReadContract({ address: FROC_ADDRESS, abi: FROC_ABI, functionName: 'metadataFrozen' })
  const { data: minted,  isLoading: lm, error: em } = useReadContract({ address: FROC_ADDRESS, abi: FROC_ABI, functionName: 'totalMinted' })
  const { data: max,     isLoading: lx, error: ex } = useReadContract({ address: FROC_ADDRESS, abi: FROC_ABI, functionName: 'MAX_SUPPLY' })

  const anyLoading = lp || la || lf || lm || lx
  const anyError   = ep || ea || ef || em || ex

  if (anyLoading) return <div className="mt-4 text-center text-xs text-white/60">Loading on-chain data…</div>
  if (anyError)   return <div className="mt-4 text-center text-xs text-red-400">Failed to load contract data.</div>

  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
      <Line label="Status" value={active ? 'Mint Active' : 'Mint Paused'} />
      <Line label="Metadata" value={frozen ? 'Frozen' : 'Mutable'} />
      <Line label="Price" value={typeof price === 'bigint' ? `${formatEther(price)} ETH` : '—'} />
      <Line label="Supply" value={
        typeof minted === 'bigint' && typeof max === 'bigint'
          ? `${minted.toString()} / ${max.toString()}`
          : '—'
      } />
    </div>
  )
}