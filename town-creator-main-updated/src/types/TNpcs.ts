import { ChainId } from '..'
import { Token } from '@/lib/sdk/index'

// Define NPC interface structure
export interface NPC {
  id: string
  type: ENPCType
  belongsToChainId: ChainId
  startingLocation: [number, number]
  moveToLocation: [number, number]
  npcBehavior: {
    continuousMovement: boolean
    speed: number
  }
  spritesheetUrl: string
  frameWidth: number
  frameHeight: number
  spritesheetNumRows: number
  spritesheetNumColumns: number
  idleAnimation: {
    enabled: boolean
    intervalOrRandom: string
  }
  idleDialogues?: string[]
  spriteRows?: TSpriteRows
  hasLeftFacingSprites: boolean
  dialogue?: TDialogue
}

export type TSpriteRows = {
  default: number
  down: number
  left: number
  up: number
  moveDown: number
  moveLeft: number
  moveUp: number
}

export enum ENPCType {
  OBJECT = 'object',
  NPC = 'npc',
  PARTNER = 'partner'
}

export type TDialogue = {
  speedTextMS?: number // [0ms super fast - 100000ms slow]
  npcName: string
  text?: string[]
  options: TDialogueOption[]
}

export type TDialogueOption = {
  menuDescription?: string
  noDialogue?: boolean
  followupText?: string[]
  dappData: TDappData
  type: EDialogueOptionType
  modalTitle: string
}

export enum EDialogueOptionType {
  FARM,
  SWAP,
  POOLS,
  IMPORT_POOLS,
  TOKEN_EXCHANGE,
  LIQUIDITY,
  EXTERNAL_LINK,
  CROWDSALE,
  TEXT_ONLY,
  TWIN_VAULTS
}

export type TDappData = {
  dialogueType?: EDialogueOptionType
  routerAddress?: string
  factoryAddress?: string
  tokenExchange?: {
    contractAddress: string
    tokenToDeposit: Token
    contractVersion?: EContractVersion
  }
  crowdSale?: {
    contractAddress: string
    tokenToRecieve: Token
  }
  twinVaults?: TTwinVault[]
  farmAddress?: string
  initHash?: string
  governanceToken?: Token
  appTokenImage?: string
  externalLinkUrl?: string
  preloadSwapForAddress?: string
}

export enum EContractVersion {
  TOKEN_EXCHANGE_DECIMAL_SUPP_V1,
  TOKEN_EXCHANGE_DECIMAL_SUPP_V2
}

export type TTwinVault = {
  twinVaultModalTitle: string
  contractAddress: string
}
