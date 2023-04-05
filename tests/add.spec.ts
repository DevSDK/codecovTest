import { add, addWithBranch, addWithSwitch } from "@/libs/add"

describe('Add operation', ()=> {
  it("1 + 2 must be 3", () => {
    expect(add(1,2)).toBe(3)
  })

  it('test a function working conditionally', ()=> {
    expect(addWithBranch(4,3, false)).toBe(7)
  })

  it('test a function having switch statement', ()=> {
    expect(addWithSwitch({type: 'string', left: 'apple', right: 'pie'})).toBe('apple + pie')
  })
})