import { test, expect } from "@playwright/test";
import { fuzzySearch } from "../fuzzySearch";

test.describe("test fuzzySearch ", () => {
  test("fuzzySearch returns true if query includes in the word (string)", () => {
    const result = fuzzySearch("fuzzySearch", "fuzzy")
    expect(result).toBe(true)
  })
  test("fuzzySearch returns false if query includes in the word (string)", () => {
    const result = fuzzySearch("fuzzySearch", "john")
    expect(result).toBe(false)
  })
  test("fuzzySearch returns true if query includes in the word (array)", () => {
    const result = fuzzySearch(["fuzzy", "Search"], "fuzzy")
    expect(result).toBe(true)
  })
  test("fuzzySearch returns false if query includes in the word (array)", () => {
    const result = fuzzySearch(["fuzzy", "Search"], "john")
    expect(result).toBe(false)
  })
  test("fuzzySearch returns false if ignoreCase case set to false", () => {
    const result = fuzzySearch(["fuzzy", "Search"], "search", {
      ignoreCase: false,
    })
    expect(result).toBe(false)
  })
  test("fuzzySearch returns false if query is greater than word", () => {
    const result = fuzzySearch("fuzzySearch", "ThisIsFuzzySearch")
    expect(result).toBe(false)
  })
  test("fuzzySearch returns true if  query is equal to word", () => {
    const result = fuzzySearch("fuzzySearch", "fuzzySearch")
    expect(result).toBe(true)
  })
})
