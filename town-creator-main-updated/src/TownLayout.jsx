// /src/TownLayout.tsx
import React from 'react';
import { tiles } from './cronos/tiles';
import { npcs } from './cronos/npcs';
import { objects } from './cronos/objects';
import { zones } from './cronos/zones';
const TownLayout = () => {
    // Set the tile size based on your assets (e.g., 32x32 pixels)
    const TILE_SIZE = 32;
    // Render the tile layout
    const renderTiles = () => (zones.tileLayout.map((row, y) => row.map((tileCode, x) => {
        const tile = tiles.tileImageMappings[tileCode];
        return (<img key={`tile-${x}-${y}`} src={tile.imageUrl} alt={`Tile ${tileCode}`} style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                position: 'absolute',
                top: y * TILE_SIZE,
                left: x * TILE_SIZE,
            }}/>);
    })));
    // Render NPCs
    const renderNPCs = () => (npcs.map(npc => (<img key={npc.id} src={npc.spritesheetUrl} alt={npc.dialogue.npcName} style={{
            width: npc.frameWidth,
            height: npc.frameHeight,
            position: 'absolute',
            top: npc.startingLocation[1],
            left: npc.startingLocation[0],
        }}/>)));
    // Render Objects
    const renderObjects = () => (zones.objects.map((obj, index) => {
        const objectData = objects.objectMapping[obj.objRef];
        return (<img key={`obj-${index}`} src={objectData.imageUrl} alt={`Object ${obj.objRef}`} style={{
                width: obj.objWidth,
                height: obj.objHeight,
                position: 'absolute',
                top: obj.startPosition.y * TILE_SIZE,
                left: obj.startPosition.x * TILE_SIZE,
            }}/>);
    }));
    return (<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {renderTiles()}
      {renderObjects()}
      {renderNPCs()}
    </div>);
};
export default TownLayout;
