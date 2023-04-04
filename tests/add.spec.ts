import { add } from "@/libs/add"

describe('Add operation', ()=> {
  it("1 + 2 must be 3", () => {
    expect(add(1,2)).toBe(3)
  })
})