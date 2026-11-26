const multiply = require("../multiply");
//const sum=require("../multiply");

test ("multiply 1*2 to equal 2",()=>{
expect (multiply(1,2)).toBe(2);
});

test ("multiply 2*2 to equal 4",()=>{
expect (multiply(2,2)).toBe(4);
});
test ("multiply 3*3 to equal 9",()=>{
expect (multiply(3,3)).toBe(9);
});