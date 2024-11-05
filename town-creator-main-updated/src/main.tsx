// // src/main.tsx
import { Application, Sprite, Rectangle, Texture, Loader } from 'pixi.js';
import { zones } from './cronos/zones';
import { tiles } from './cronos/tiles';
import { objects } from './cronos/objects';
import { npcs } from './cronos/npcs';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize PixiJS application
const app = new Application({
  width: 900,
  height: 800,
  backgroundColor: 0x000000,
});

// Add the PixiJS canvas to the HTML document
document.body.appendChild(app.view);

// Collect unique image URLs
const assetUrls = new Set<string>();

// Add tile images
Object.values(tiles.tileImageMappings).forEach((tile) => {
  assetUrls.add(tile.imageUrl);
});

// Add object images
Object.values(objects.objectMapping).forEach((obj) => {
  assetUrls.add(obj.imageUrl);
});

// Add NPC spritesheets
npcs.forEach((npc) => {
  assetUrls.add(npc.spritesheetUrl);
});

// Load assets using PixiJS v6 Loader
const loader = Loader.shared;
Array.from(assetUrls).forEach((url) => loader.add(url));

loader.load(() => {
  setup();
});

function setup() {
  renderTileMap();
  renderObjects();
  renderNPCs();
}

function renderTileMap() {
  const tileSize = 16; // Assuming each tile is 32x32 pixels

  zones.tileLayout.forEach((row, rowIndex) => {
    row.forEach((tileId, colIndex) => {
      const tileInfo = tiles.tileImageMappings[tileId.toString()];
      if (tileInfo) {
        const texture = loader.resources[tileInfo.imageUrl].texture as Texture;
        const sprite = new Sprite(texture);
        sprite.x = colIndex * tileSize;
        sprite.y = rowIndex * tileSize;
        sprite.width = tileSize;
        sprite.height = tileSize;
        app.stage.addChild(sprite);
      }
    });
  });
}

// function renderObjects() {
//   zones.objects.forEach((obj) => {
//     const objInfo = objects.objectMapping[obj.objRef];
//     if (objInfo) {
//       const texture = loader.resources[objInfo.imageUrl].texture as Texture;
//       const sprite = new Sprite(texture);
//       sprite.x = obj.startPosition.x * obj.objWidth;
//       sprite.y = obj.startPosition.y * obj.objHeight;
//       sprite.width = obj.objWidth;
//       sprite.height = obj.objHeight;
//       app.stage.addChild(sprite);
//     }
//   });
// }

function renderObjects() {
  zones.objects.forEach((obj) => {
    const objInfo = objects.objectMapping[obj.objRef];
    if (objInfo) {
      const texture = loader.resources[objInfo.imageUrl].texture as Texture;
      const sprite = new Sprite(texture);
      
      // Use width and height from objInfo instead of zones data
      const objWidth = objInfo.objWidth;
      const objHeight = objInfo.objHeight;
      
      sprite.x = obj.startPosition.x * objWidth;
      sprite.y = obj.startPosition.y * objHeight;
      sprite.width = objWidth;
      sprite.height = objHeight;

      app.stage.addChild(sprite);
    }
  });
}


function renderNPCs() {
  npcs.forEach((npc) => {
    const texture = loader.resources[npc.spritesheetUrl].texture as Texture;
    if (texture) {
      // Define a rectangle frame for the first frame of the NPC sprite
      const frame = new Rectangle(0, 0, npc.frameWidth, npc.frameHeight);
      const croppedTexture = new Texture(texture.baseTexture, frame);
      const sprite = new Sprite(croppedTexture);

      // Adjust scale to fit the grid if needed
      const scale = 48 / npc.frameWidth;
      sprite.scale.set(scale);

      // Set NPC initial position
      sprite.x = npc.startingLocation[0];
      sprite.y = npc.startingLocation[1];

      app.stage.addChild(sprite);
    }
  });
}

// React App rendering in root element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

