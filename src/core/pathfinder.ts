import { EXIT_SYMBOL, START_SYMBOL } from "../consts";
import type { MapGrid, PathResult } from "../types";
import {
  findUniqueSymbol,
  getNeighbors,
  isPathSymbol,
  isUppercaseLetter,
  positionKey,
} from "../utils";

export function findPath(map: MapGrid): PathResult {
  const start = findUniqueSymbol(map, START_SYMBOL);

  // Validate exit
  findUniqueSymbol(map, EXIT_SYMBOL);

  const visited = new Set<string>();
  const letters: string[] = [];
  const path: string[] = [];

  let current = start;

  while (true) {
    const char = map[current.row][current.col];
    path.push(char);

    if (isUppercaseLetter(char)) {
      letters.push(char);
    }
    if (char === EXIT_SYMBOL) break;

    visited.add(positionKey(current));

    const next = getNeighbors(map, current).find((neighbor) => {
      const symbol = map[neighbor.row][neighbor.col];
      return isPathSymbol(symbol) && !visited.has(positionKey(neighbor));
    });

    if (!next) {
      throw new Error("No valid move found, path is broken");
    }

    current = next;
  }

  return {
    letters: letters.join(""),
    path: path.join(""),
  };
}
