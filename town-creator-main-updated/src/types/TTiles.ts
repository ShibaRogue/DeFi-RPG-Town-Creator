// src/types/TTiles.ts
export interface TTiles {
    tileImageMappings: {
      [key: string]: {
        imageUrl: string;
        blockable: boolean;
      };
    };
  }
  