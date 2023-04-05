export function calc(expression: string) {
  expression = expression.replace(/\s/g, "");
  return helper(expression, 0);
}
function helper(s: string, idx: number) {
  const stk: number[] = [];
  let sign = "+";
  let num = 0;
  for (let i = idx; i < s.length; i++) {
    let c = s[i];
    if (c >= "0" && c <= "9") {
      num = num * 10 + +c;
    }
    if (!(c >= "0" && c <= "9") || i === s.length - 1) {
      if (c === "(") {
        num = helper(s, i + 1);
        let l = 1,
          r = 0;
        for (let j = i + 1; j < s.length; j++) {
          if (s[j] === ")") {
            r++;
            if (r === l) {
              i = j;
              break;
            }
          } else if (s[j] === "(") l++;
        }
      }
      let pre = -1;
      switch (sign) {
        case "+":
          stk.push(num);
          break;
        case "-":
          stk.push(num * -1);
          break;
        case "*":
          pre = stk.pop() || 1;
          stk.push(pre * num);
          break;
        case "/":
          pre = stk.pop() || 1;
          stk.push(pre / num);
          break;
      }
      sign = c;
      num = 0;
      if (c === ")") break;
    }
  }
  let ans = 0;
  while (stk.length > 0) {
    ans += stk.pop() || 0;
  }
  return ans;
}
