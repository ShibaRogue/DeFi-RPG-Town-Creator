import { ChainId } from '..'
import { EDialogueOptionType, ENPCType, NPC } from '../types/TNpcs'
import arySprite from './assets/npc/ary.png'
import billSprite from './assets/npc/bill.png'
import cawSprite from './assets/npc/caw.png'
import { Token } from '@/lib/sdk/index'

const chainId = ChainId.CRONOS

const farmAddress = '0x56731CCBe105363f8B01589d6d9F2383B7cC11CD'
const factoryAddress = '0xB8364EFF247a469fe7b34956B1e5c0A9Bda6F630'
const initHash = '0x57c454d7cd80b7071ad4cf9f163c6e63b2e29ed0f61e3c967e0e528664728ae5'
const routerAddress = '0x236D14CbE83d5f3E92f01952A2FAB25174adcb9e'

const seaToken = new Token(chainId, '0x7A3F6fFC0b5bb6f18736E4f21B3715932c2Fcf79', 18, 'SEA', 'Sea Token')

// These are partners in which the mayors makes partnerships on
export const partnerNPCs: NPC[] = [
  // bill
  {
    id: '100',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: billSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 9,
    spritesheetNumColumns: 4,
    startingLocation: [375, 190],
    moveToLocation: [375, 237],
    npcBehavior: { continuousMovement: true, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'interval'
    },
    spriteRows: {
      default: 0,
      down: 0,
      left: 1,
      up: 2,
      moveDown: 3,
      moveLeft: 4,
      moveUp: 5
    },
    hasLeftFacingSprites: false,
    dialogue: {
      speedTextMS: 20,
      npcName: 'Bill',
      text: ['I am an official liaison for Bills Billionaire!'],
      options: [
        {
          menuDescription: 'Link to Discord',
          dappData: {
            externalLinkUrl: 'https://discord.gg/nWSKsnKAB8'
          },
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: ''
        },
        {
          menuDescription: 'Buy BILL',
          dappData: {
            preloadSwapForAddress: '0xDaAcD0429516832ca1737d1FAa5a739d8F55c097',
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          },
          type: EDialogueOptionType.SWAP,
          modalTitle: ''
        }
      ]
    }
  },
  // caw
  {
    id: '101',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: cawSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 9,
    spritesheetNumColumns: 4,
    startingLocation: [350, 300],
    moveToLocation: [300, 300],
    npcBehavior: { continuousMovement: true, speed: 1 },
    hasLeftFacingSprites: true,
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'interval'
    },
    idleDialogues: [
      'caw caw',
      'send it to zero',
      'f*ck ur cult',
      'ooooga boooga',
      'pamp it',
      'extremely bullish',
      'go touch some grass',
      'there is no other option',
      'caw on wallet = choose rich',
      'we need more CEX',
      'can glenda do something',
      'let’s raid',
      'wen lambo',
      'sorry we don’t think here',
      'UH UH UH UH',
      'let’s cook',
      'crows are smart',
      'respect the lowercase',
      'x100 or 0'
    ],
    spriteRows: {
      default: 0,
      down: 0,
      left: 1,
      up: 2,
      moveDown: 3,
      moveLeft: 4,
      moveUp: 5
    },
    dialogue: {
      speedTextMS: 20,
      npcName: 'CAW (crow with knife)',
      text: ['Hey you...', 'relax shurmano, what’s up', "hey what's going on", 'hello there', 'waddup'],
      options: [
        {
          menuDescription: "What's CAW about?",
          followupText: [
            'only few know the caw lore.',
            'bro stop with the questions, there is no other option',
            'there is only one option, reach the target and go x100',
            "the guidelines were 'touch grass'",
            'this shit is built different',
            'literally just a crow with knife'
          ],
          dappData: {},
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: ''
        },
        {
          menuDescription: 'Official CAW website',
          dappData: {
            externalLinkUrl: 'https://crowwithknife.com'
          },
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: ''
        },
        {
          menuDescription: "What's in the future for CAW?",
          followupText: [
            'the meme is that we don’t explain shit ser. the announcement is no announcement.',
            'I’m activating the bulldozer!',
            'how about wait for announcement',
            'rest-assured, tomorrow there will be plenty of announcements'
          ],
          dappData: {},
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: ''
        },
        {
          menuDescription: 'Buy CAW',
          dappData: {
            preloadSwapForAddress: '0xcCcCcCcCdbEC186DC426F8B5628AF94737dF0E60',
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress
          },
          type: EDialogueOptionType.SWAP,
          modalTitle: ''
        }
      ]
    }
  },
  // ary
  {
    id: '102',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: arySprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 8,
    spritesheetNumColumns: 4,
    startingLocation: [235, 262],
    moveToLocation: [235, 310],
    npcBehavior: { continuousMovement: true, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'interval'
    },
    spriteRows: {
      default: 0,
      down: 0,
      left: 1,
      up: 2,
      moveDown: 4,
      moveLeft: 5,
      moveUp: 6
    },
    hasLeftFacingSprites: true,
    idleDialogues: [
      'Are you Aryguard ?',
      'Hey there!',
      'NO LIMITS',
      'Where is my knife?',
      'Arysoldiers are coming!',
      'ARY CROSSTHECHAIN',
      'Share you Love',
      'I pump your bag',
      'FAM'
    ],
    dialogue: {
      speedTextMS: 20,
      npcName: 'ARY',
      text: ['Hey there ARYGUARD'],

      options: [
        {
          menuDescription: "what's about ARY ?",
          dappData: {},
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          followupText: ['The unlimited CRONOS memecoin. What are your limits?']
        },
        {
          menuDescription: 'ARYHOME',
          dappData: {
            externalLinkUrl: 'https://www.aryoshin.com/'
          },
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: ''
        },
        {
          menuDescription: 'You looked here?',
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://app.ebisusbay.com/drops/ary'
          }
        },
        {
          menuDescription: 'Follow Me',
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://x.com/CronosAry?t=3QjYobaPvCGsZMAXbYmN_Q&s=08'
          }
        },
        {
          menuDescription: 'Buy ARY',
          type: EDialogueOptionType.SWAP,
          modalTitle: '',
          dappData: {
            preloadSwapForAddress: '0x41bc026dABe978bc2FAfeA1850456511ca4B01bc',
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          }
        }
      ]
    }
  }
]
