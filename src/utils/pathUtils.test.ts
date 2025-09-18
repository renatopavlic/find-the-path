import { describe, expect, test } from "vitest";

import type { MapGrid } from "../types";
import {
  isUppercaseLetter,
  isPathSymbol,
  positionKey,
  getNeighbors,
} from "./pathUtils";

describe("pathUtils", () => {
  test("isUppercaseLetter detects letters", () => {
    expect(isUppercaseLetter("A")).toBe(true);
    expect(isUppercaseLetter("a")).toBe(false);
    expect(isUppercaseLetter("-")).toBe(false);
  });

  test("isPathSymbol detects valid path chars", () => {
    expect(isPathSymbol("A")).toBe(true);
    expect(isPathSymbol("-")).toBe(true);
    expect(isPathSymbol(" ")).toBe(false);
  });

  test("positionKey converts position to string", () => {
    expect(positionKey({ row: 2, col: 3 })).toBe("2,3");
  });

  test("getNeighbors returns valid neighbors", () => {
    const map: MapGrid = [
      ["@", "-", "A"],
      [" ", "x", " "],
    ];
    const neighbors = getNeighbors(map, { row: 0, col: 1 });
    expect(neighbors).toEqual([
      { row: 1, col: 1 },
      { row: 0, col: 0 },
      { row: 0, col: 2 },
    ]);
  });
});
