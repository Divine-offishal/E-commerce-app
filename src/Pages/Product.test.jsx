import { describe, expect, it } from "vitest";
import Product from "./Product";

describe('#Product', () => {
  it('makes a fetch request', () => {
    expect(Product()).toContain(fetch)
  })
})