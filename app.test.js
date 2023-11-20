// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import divideBill from "./main.js";


describe("division of the bill", () => {
    test("divides 100 by 2 to equal 50", () => {
        expect(divideBill(100, 2)).toBe(50)
    })
    
    test.fails("fails if divides a bill of $0 between 0 people", () => {
        expect(divideBill(0, 0)).toThrowError()
    })

    test.fails("fails if divides a bill between 0 or less people", () => {
        expect(divideBill(100, -1)).toThrowError()
    })
})


