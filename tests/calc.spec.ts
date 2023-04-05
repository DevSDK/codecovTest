import { calc } from "@/libs/calc"

describe("calc()", ()=> {
  it('1+1=2', ()=> {
    expect(calc('1+1')).toBe(2)
  })

  it('2/2 = 1', ()=> {
    expect(calc('2/2')).toBe(1)
  })

  it('1+2*2 = 6', ()=> {
    expect(calc('1+2*2')).toBe(5)
  })
})