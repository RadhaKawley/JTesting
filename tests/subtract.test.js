const subtract=require("../subtract")
test ("add 2-1 to equal 1",()=>{
expect (subtract(2,1)).toBe(1);
});

test ("add 5-2 to equal 3",()=>{
expect (subtract(5,2)).toBe(3);
});
test ("add 9-4to equal 5",()=>{
expect (subtract(9,4)).toBe(5);
});