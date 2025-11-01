// src/lib/contract.ts
import { parseAbi } from 'viem'

export const FROC_ADDRESS =
  '0x9565BbD701cF12732B274b28E3A3E5099D2c5186' as const

export const FROC_ABI = parseAbi([
  // write
  'function mint(uint256 quantity) payable',

  // reads
  'function owner() view returns (address)',
  'function price() view returns (uint256)',
  'function mintActive() view returns (bool)',
  'function metadataFrozen() view returns (bool)',
  'function totalMinted() view returns (uint256)',
  'function MAX_SUPPLY() view returns (uint256)',
  'function tokenURI(uint256) view returns (string)',
])