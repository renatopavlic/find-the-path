import { PATH_SYMBOLS } from "../consts";
import type { MapGrid, Position } from "../types";
import { isInsideMap } from "./mapUtils";

const isUppercaseLetter = (char: string): boolean => /^[A-Z]$/.test(char);

const isPathSymbol = (char: string): boolean =>
  PATH_SYMBOLS.has(char) || isUppercaseLetter(char);

const positionKey = ({ row, col }: Position): string => `${row},${col}`;

const getNeighbors = (map: MapGrid, { row, col }: Position): Position[] => {
  const deltas: Position[] = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
  ];
  return deltas
    .map(({ row: dr, col: dc }) => ({ row: row + dr, col: col + dc }))
    .filter((pos) => isInsideMap(map, pos));
};

export { isUppercaseLetter, isPathSymbol, positionKey, getNeighbors };
