import { describe, expect, test } from "vitest";
import type { MapGrid } from "../types";
import { findUniqueSymbol, isInsideMap, getSymbolPositions } from "./mapUtils";

describe("mapUtils", () => {
  const map: MapGrid = [
    ["@", "-", "A"],
    [" ", "x", " "],
  ];

  test("getSymbolPositions finds all symbols", () => {
    expect(getSymbolPositions(map, "@")).toEqual([{ row: 0, col: 0 }]);
    expect(getSymbolPositions(map, "x")).toEqual([{ row: 1, col: 1 }]);
  });

  test("findUniqueSymbol throws if symbol missing", () => {
    expect(() => findUniqueSymbol(map, "Z")).toThrow("not found");
  });

  test("findUniqueSymbol throws if multiple symbols exist", () => {
    const badMap: MapGrid = [
      ["@", "@"],
      [" ", " "],
    ];
    expect(() => findUniqueSymbol(badMap, "@")).toThrow("Multiple occurrences");
  });

  test("isInsideMap works correctly", () => {
    expect(isInsideMap(map, { row: 0, col: 0 })).toBe(true);
    expect(isInsideMap(map, { row: 5, col: 5 })).toBe(false);
  });
});
