//using temp
var a=3;
var b=2;
var c;   //temp variable
c=a;
a=b;
b=c;
console.log(a);
console.log(b);

//with addition and subtraction
var a=3;
var b=2;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);

//with multiplication and division
var a=3;
var b=2;
a=a*b;
b=a%b;
a=a%b;
console.log(a);
console.log(b);

//with xor
var a=3;
var b=2;
a=a^b;
b=a^b;
a=a^b;
console.log(a);
console.log(b);

//with xnor
var a=3;
var b=2;
a=(~(a^b));
b=(~(a^b));
a=(~(a^b));
console.log(a);
console.log(b);