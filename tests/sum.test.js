const {sum,sumStr}=require("../sum");

test ("add 1+2 to equal 3",()=>{
expect (sum(1,2)).toBe(3);
});

test ("add 2+3 to equal 5",()=>{
expect (sum(2,3)).toBe(5);
});
test ("add 5+4 to equal 9",()=>{
expect (sum(4,4)).toBe(9);
});

test ("add a+b to equal ab",()=>{
expect (sumStr("a","b")).toBe("abc");
});

test ("add a+b to equal aabb",()=>{
expect (sumStr("aa","bb")).toBe("aabb");
});