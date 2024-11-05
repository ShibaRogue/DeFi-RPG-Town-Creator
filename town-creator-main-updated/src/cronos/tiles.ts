// public/cronos/tiles.ts
import { TTiles } from '../types/TTiles';
import tile1 from './assets/tiles/1.png'
import tile2 from './assets/tiles/2.png'
import tile3 from './assets/tiles/3.png'
import tile4 from './assets/tiles/4.png'
import tile5 from './assets/tiles/5.png'

export const tiles: TTiles = {
  tileImageMappings: {
    '0': {
      imageUrl: tile1,
      blockable: true
    },
    '1': {
      imageUrl: tile1,
      blockable: false
    },
    '2': {
      imageUrl: tile2,
      blockable: false
    },
    '3': {
      imageUrl: tile3,
      blockable: false
    },
    '4': {
      imageUrl: tile4,
      blockable: true
    },
    '5': {
      imageUrl: tile5,
      blockable: false
    }
  }
}
