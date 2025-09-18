import type { MapGrid, Position } from "../types";

const isInsideMap = (map: MapGrid, { row, col }: Position): boolean => {
  return row >= 0 && col >= 0 && row < map.length && col < map[row].length;
};

const getSymbolPositions = (map: MapGrid, symbol: string): Position[] => {
  return map.flatMap((row, rowIndex) =>
    row
      .map((cell, colIndex) =>
        cell === symbol ? { row: rowIndex, col: colIndex } : null
      )
      .filter((p): p is Position => p !== null)
  );
};

const findUniqueSymbol = (map: MapGrid, symbol: string): Position => {
  const positions = getSymbolPositions(map, symbol);
  if (positions.length === 0) {
    throw new Error(`Symbol '${symbol}' not found in map`);
  }
  if (positions.length > 1) {
    throw new Error(`Multiple occurrences of symbol '${symbol}' found`);
  }
  return positions[0];
};

export { isInsideMap, findUniqueSymbol, getSymbolPositions };
