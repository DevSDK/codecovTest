export function add(a: number, b: number) {
  return a + b;
}

export function addWithBranch(a: number, b: number, condition: boolean) {
  if (condition) {
    return a + a + b + b;
  }
  return a + b;
}

export type AddString = {
  type: "string";
  left: string;
  right: string;
};

export type AddNumber = {
  type: "number";
  left: number;
  right: number;
};

export function addWithSwitch(p: AddString | AddNumber) {
  switch (p.type) {
    case "number":
      return p.left + p.right;
    case "string":
      return `${p.left} + ${p.right}`;
    default:
      return null;
  }
}
