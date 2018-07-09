//prime or not

var n=5;
for(let i=0;i<n;i++)
{
    if(n%i===0)
    {
        console.log('not prime');
    }
    else

    {
        console.log('prime');
    }
}
//division without modulus(%)
var n=9;
var div=4;
var a,b,r;
a=n/div;
console.log(a);
b=Math.floor(a);
console.log(b);
r=a-b;
r=Math.round(r*div);
console.log('remained is',r);


//
