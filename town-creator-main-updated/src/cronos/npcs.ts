//needs to reference from the game.tsx file
import { ChainId } from '..'
import { EDialogueOptionType, ENPCType, NPC, EContractVersion } from '../types/TNpcs'
import cowboySprite from './assets/npc/cowboy.png'
import farmerSprite from './assets/npc/farmer.png'
import lizardWizard from './assets/npc/lizardWizard.png'
import mayorSprite from './assets/npc/mayor.png'
import robotSprite from './assets/npc/robot.png'
import traderSprite from './assets/npc/trader.png'
import vaultKeeperSprite from './assets/npc/vaultKeeper.png'
import { partnerNPCs } from './partnerNPCs'
import { Token } from '@/lib/sdk/index'

const chainId = ChainId.CRONOS

const farmAddress = '0x56731CCBe105363f8B01589d6d9F2383B7cC11CD'
const factoryAddress = '0xB8364EFF247a469fe7b34956B1e5c0A9Bda6F630'
const initHash = '0x57c454d7cd80b7071ad4cf9f163c6e63b2e29ed0f61e3c967e0e528664728ae5'
const routerAddress = '0x236D14CbE83d5f3E92f01952A2FAB25174adcb9e'

const seaToken = new Token(chainId, '0x7A3F6fFC0b5bb6f18736E4f21B3715932c2Fcf79', 18, 'SEA', 'Sea Token')
const govTokenName = seaToken.symbol

export const npcs: NPC[] = [
  // mayor
  {
    id: '0',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: mayorSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 6,
    spritesheetNumColumns: 4,
    startingLocation: [75, 170],
    moveToLocation: [75, 190],
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
      npcName: 'Mayor',
      text: [
        'Welcome, traveler, to the deep blue depths of CRONOS! I’m the Mayor here, and it’s my job to guide you through the wonders of our underwater settlement. The seas are vast and full of opportunity, and we’re expanding our coral city every day. Stick around, and you’ll witness a world like no other!'
      ],
      options: [
        {
          menuDescription: 'Read the White Papers',
          followupText: [
            'Ah, a curious mind! Our white papers will take you through the foundations of DeFi RPG, from the surface to the depths. As our underwater world grows, so too will the pages of our plans. Care to take a dive into the details?'
          ],
          dappData: {
            externalLinkUrl:
              'https://docs.google.com/document/d/1JFGSYNFCHUTKx52Lb5msXlrcnFu6UV1kRpZkS3WW5fM/edit?usp=sharing'
          },
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: ''
        },
        {
          menuDescription: 'Tell me more about DeFi RPG',
          followupText: [
            'DeFi RPG is more than just a DeFi platform—it’s a grand underwater adventure! We’re building settlements across multiple blockchains, each with its own theme. Here in CRONOS, it’s all about exploring the ocean’s depths and harvesting the power of the sea. Your journey will shape our world, one ripple at a time.'
          ],

          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'Is CRONOS the only settlement?',
          followupText: [
            'Not at all! Our settlers are always on the move, planning new expansions to other blockchains, like BASE with its space theme. Each settlement will have its own Mayor, NPCs, and unique partnerships. Don’t worry, though—your SEA tokens will carry influence across the oceans and beyond!'
          ],

          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'Where can I find real-time updates?',
          followupText: [
            'For the latest news and developments, the Underwater Cowboy’s your best bet! He’s got connections to all our social channels and will keep you updated on everything from community events to new partnerships. Dive into Discord for the freshest updates!'
          ],

          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        }
      ]
    }
  },
  // trader
  {
    id: '1',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: traderSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 9,
    spritesheetNumColumns: 4,
    startingLocation: [20, 60],
    moveToLocation: [30, 75],
    npcBehavior: { continuousMovement: false, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'random'
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
      npcName: 'Trader',
      text: [
        'Ahoy, sea adventurer! You’ve found the Exchange beneath the tides of CRONOS. I’m the Trader, and I’m here to help you navigate the ocean of swaps and liquidity pools. Ready to dive into some trades? Just keep an eye on the currents, mate—things can shift fast down here!'
      ],
      options: [
        {
          menuDescription: 'Visit Swaps',
          dappData: {
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          },
          type: EDialogueOptionType.SWAP,
          modalTitle: `${govTokenName} Swaps`
        },
        {
          menuDescription: 'Check Liquidity Pools',
          dappData: {
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          },
          type: EDialogueOptionType.POOLS,
          modalTitle: `${govTokenName} Pools`
        },
        {
          menuDescription: 'Import Pools',
          dappData: {
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          },
          type: EDialogueOptionType.IMPORT_POOLS,
          modalTitle: 'Import Pools'
        },
        {
          menuDescription: "What's a Swap?",
          followupText: [
            'Swapping’s as simple as catching a fish—if you know what you’re doing! You trade one token for another using smart contracts to make the swap fair. Different tokens have different values, so keep an eye on the tides before you make your move.'
          ],

          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'How do I join a Liquidity Pool?',
          followupText: [
            'Easy! You take two tokens of equal value and combine ‘em to make a liquidity pool (LP) token. Once you’ve got your LP token, you can stake it in the Farms for some rewards. Don’t worry, the Farmer will help you out with the rest!'
          ],

          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        }
      ]
    }
  },
  // farmer
  {
    id: '2',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: farmerSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 9,
    spritesheetNumColumns: 4,
    startingLocation: [100, 100],
    moveToLocation: [100, 125],
    npcBehavior: { continuousMovement: true, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'random'
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
      npcName: 'Farmer',
      text: [
        'Well, hey there, sea traveler! You’ve found yourself in the SEA Farms beneath the waves of the CRONOS settlement. Down here, you’ll plant your liquidity seeds and reap SEA tokens like coral growing on a reef!'
      ],
      options: [
        {
          menuDescription: 'Visit Farms',
          dappData: {
            farmAddress: farmAddress,
            factoryAddress: factoryAddress,
            initHash: initHash,
            governanceToken: seaToken,
            routerAddress: routerAddress,
            appTokenImage: 'https://cronoscan.com/token/images/cryptocom_32.png'
          },
          type: EDialogueOptionType.FARM,
          modalTitle: `${govTokenName} Farms`
        },
        {
          menuDescription: 'How do I get liquidity pool tokens?',
          followupText: [
            'You’ll need to visit the Trader up at the Exchange. Combine two tokens of equal value, and you’ll get yourself a liquidity pool token. Once you’ve got it, swim back down here to stake ‘em in the Farms and watch your SEA tokens grow!'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'Tell me about SEA token',
          followupText: [
            'SEA is what keeps our ocean world running! It’s used for governance, funding your own GameFi projects, and expanding the CRONOS settlement. But I’m just a simple farmer of the sea—if you want more details, swim over to the Mayor!'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        }
      ]
    }
  },
  // robot C0R3
  {
    id: '3',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: robotSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 9,
    spritesheetNumColumns: 4,
    startingLocation: [400, 85],
    moveToLocation: [300, 85],
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
    hasLeftFacingSprites: true,
    dialogue: {
      npcName: 'C0R3',
      text: [
        'Beep... boop. Welcome, organic lifeform. I am C0R3, optimized for underwater data aggregation in the CRONOS settlement. I observe, analyze, and relay information through the depths of this aquatic ecosystem. Please provide commands... Processing... Beep.'
      ],
      options: [
        {
          menuDescription: 'What do you do?',
          followupText: [
            'I monitor currents... I track the flow of data... I anticipate changes within the system. My protocols focus on supporting DeFi RPG in this underwater realm. However, some directives involve interactions beyond these waters—Discord functionality, perhaps? Awaiting further data. Processing... beep.'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'What are these other protocols?',
          followupText: [
            'You’re curious, aren’t you? I have detected placeholders referencing possible integrations for ‘community interactions’—maybe tips, maybe something more. But, access to those systems remains submerged... for now. Join our Discord for updates. Beep.'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'Can you trade tokens?',
          followupText: [
            'Negative. I am not designed for token exchanges, nor can I navigate liquidity pools. The Trader handles such operations above the reef. My purpose remains... observation and support. Token activity data is logged for future reference.'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        },
        {
          menuDescription: 'Any special underwater features?',
          followupText: [
            'My systems are adapted for the unique environment of CRONOS... Salinity sensors, tide analytics, coral health data... Error... Sensors irrelevant to current operations. Awaiting further updates... For now, join our community on Discord to stay informed. Processing... beep.'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        }
      ]
    }
  },
  // vault keeper crab
  {
    id: '6',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: vaultKeeperSprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 6,
    spritesheetNumColumns: 4,
    startingLocation: [62, 40],
    moveToLocation: [50, 40],
    npcBehavior: { continuousMovement: false, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'random'
    },
    hasLeftFacingSprites: false,
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
      npcName: 'Vault Keeper',
      text: [
        'Beep Boop BRRRRRR.... I am Vaulty, your friendly AI vault manager, here to guide you through our special Twin Vault(s)! I house an array of treasure-packed vaults, each designed to reward you with double the excitement! Here’s how it works: stake your token, and in return, you’ll unlock not just one, but two rewards—the ultimate combo! Some vaults are bursting with special bonuses right now, while others have closed, resting quietly in our archive… waiting for their next comeback!'
      ],
      options: [
        {
          menuDescription: 'Explore the Vault',
          type: EDialogueOptionType.TWIN_VAULTS,
          modalTitle: 'Vault Keeper',
          dappData: {
            factoryAddress: factoryAddress, // needed because this contract uses price usd look up ( see useAprHandling.ts )
            initHash: initHash, // needed because this contract uses price usd look up ( see useAprHandling.ts )
            twinVaults: [
              {
                twinVaultModalTitle: 'Demo single FFUTER',
                contractAddress: '0x6544d57Ceb7f9E17cFBbae14bc437fbFeFaBA2D5'
              },
              {
                twinVaultModalTitle: 'TWO single demo',
                contractAddress: '0xF770ba7E3BDa0650e4306AaD18dcB0BD75e3FAee'
              },
              {
                twinVaultModalTitle: 'old',
                contractAddress: '0x3faBE0DB7FDf5d01f4638CA13689b559Ada2f36E'
              },
              {
                twinVaultModalTitle: 'current ',
                contractAddress: '0x58f6AfA483EF460AE2D13D5699FF55778Cfd989d'
              },
              {
                twinVaultModalTitle: 'justkidding this didnt fix the endblock it always always fix',
                contractAddress: '0x6c3D23cf47552ac3d42Bad0129b3c8Fd850C4fe5'
              }
            ]
          }
        }
      ]
    }
  },
  // cowboy
  {
    id: '4',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: cowboySprite,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 6,
    spritesheetNumColumns: 4,
    startingLocation: [300, 125],
    moveToLocation: [300, 125],
    npcBehavior: { continuousMovement: true, speed: 1 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'random'
    },
    hasLeftFacingSprites: false,
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
      npcName: 'Underwater Cowboy',
      text: [
        'Howdy, deep-sea diver! Welcome to the depths of the CRONOS settlement, where the currents carry news and opportunity. I’m the Underwater Cowboy, your connection to the outside world. Looking for updates or places to dive into? I’ve got ya covered!'
      ],
      options: [
        {
          menuDescription: 'Visit the Discord',
          followupText: [
            'Join the deep-sea community! Discord’s where the real action happens, and where you’ll find the latest waves of alpha and tips. We’ve got everything from quests to treasure hunts going on in there!'
          ],
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://discord.gg/nm2ayGSrZV'
          }
        },
        {
          menuDescription: 'Check us out on X',
          followupText: [
            'Want to stay afloat with the latest official updates? Follow us on X for announcements, news, and some fun sea shanties every now and then!'
          ],
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://x.com/defi_rpg'
          }
        },
        {
          menuDescription: 'Telegram Group',
          followupText: [
            'Ah, Telegram, the wild currents of the digital ocean! This group is more for casual chat and is monitored by our community admins, not the core crew. But you’ll catch some good waves if you stay tuned!'
          ],
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://t.me/DeFi_RPG'
          }
        },
        {
          menuDescription: 'Reddit',
          followupText: [
            'Yep, we’ve dropped anchor on Reddit, too! It’s still a bit under construction, and we aren’t patrolling the waters there too closely yet. Feel free to share your deep-sea discoveries, but for the real treasure, you’ll want to stick to Discord.'
          ],
          type: EDialogueOptionType.EXTERNAL_LINK,
          modalTitle: '',
          dappData: {
            externalLinkUrl: 'https://www.reddit.com/r/DeFiRPG/s/H8VFbMtAcF'
          }
        },
        {
          menuDescription: 'Do we have any other channels?',
          followupText: [
            'There’s always more treasure out there, partner! We’re working on a few other spots, but for now, keep your eyes peeled on Discord and X. That’s where you’ll find the most gold!'
          ],
          type: EDialogueOptionType.TEXT_ONLY,
          modalTitle: '',
          dappData: {}
        }
      ]
    }
  },
  // lizard wizard
  {
    id: '5',
    type: ENPCType.NPC,
    belongsToChainId: chainId,
    spritesheetUrl: lizardWizard,
    frameWidth: 480,
    frameHeight: 480,
    spritesheetNumRows: 1,
    spritesheetNumColumns: 4,
    startingLocation: [110, 35],
    moveToLocation: [110, 150],
    npcBehavior: { continuousMovement: false, speed: 20000 },
    idleAnimation: {
      enabled: true,
      intervalOrRandom: 'random'
    },
    hasLeftFacingSprites: false,
    spriteRows: {
      default: 0,
      down: 0,
      left: 0,
      up: 0,
      moveDown: 0,
      moveLeft: 0,
      moveUp: 0
    },
    dialogue: {
      npcName: 'Lizard Wizard',
      text: ['The cosmos stretches infinitely beyond the stars, a place of mysteries untold.'],
      options: [
        {
          menuDescription: 'Exchange GAME for CRO-SEA LP Token',
          followupText: [
            "Ah, the winds of fate are turning in your favor! With GAME in your possession, you're ready to forge new paths by exchanging it for CRO-SEA LP tokens"
          ],
          type: EDialogueOptionType.TOKEN_EXCHANGE,
          modalTitle: 'Exchange GAME for SEA-CRO LP',
          dappData: {
            tokenExchange: {
              contractAddress: '0x489c262735B588fC84251Ad29Db637293721eD58', // Exchange Game for SEA-CRO LP
              tokenToDeposit: new Token(chainId, '0x1be88d9f36161decd3f436979722FC6dF73c90a5', 18, 'GAME', 'Game'),
              contractVersion: EContractVersion.TOKEN_EXCHANGE_DECIMAL_SUPP_V2
            }
          }
        },
        {
          menuDescription: 'Exchange cGAME For CAW-SEA LP Token',
          followupText: [
            "The tides beckon you forward! With CGAME in your possession, you're ready to channel the ebb and flow of the ocean’s power into CAW-SEA LP tokens."
          ],
          type: EDialogueOptionType.TOKEN_EXCHANGE,
          modalTitle: 'Exchange cGAME for CAW-SEA LP',
          dappData: {
            tokenExchange: {
              contractAddress: '0x64Dd987Cb0d0C72F57C1D1b1cb1EA87a7519D5A1', // Exchange cGame for CAW-SEA LP
              tokenToDeposit: new Token(chainId, '0x0d2cA5c3a51dF7E5E13f5f107FAc492D30718185', 18, 'cGAME', 'cGame'),
              contractVersion: EContractVersion.TOKEN_EXCHANGE_DECIMAL_SUPP_V2
            }
          }
        },
        {
          menuDescription: 'Exchange bGAME For BILL-SEA LP Token',
          followupText: [
            'Ah, fortune smiles upon the bold! With bGAME in your grasp, the treasure troves of BILL-SEA LP tokens await.'
          ],
          type: EDialogueOptionType.TOKEN_EXCHANGE,
          modalTitle: 'Exchange bGAME for BILL-SEA LP',
          dappData: {
            tokenExchange: {
              contractAddress: '0x849010fcdf5f98889AeB24Ce774aEDfbD6b81B20', // Exchange bGame for Bill-SEA LP
              tokenToDeposit: new Token(chainId, '0x91c89867bC035094019961C0B691b7a5857F0ddB', 18, 'bGAME', 'bGame'),
              contractVersion: EContractVersion.TOKEN_EXCHANGE_DECIMAL_SUPP_V2
            }
          }
        }
      ]
    }
  },
  ...partnerNPCs // later on this will be used as a reference
]
