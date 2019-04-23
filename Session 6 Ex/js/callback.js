const p=100,q=200;

console.log("Hello World")

function sum(a,b,cb,cb1,cb2)
{
    console.log("This is function from where callback is invoking");
   // setTimeout(()=>{

        cb(a+b);
        cb1(a-b);
        cb2(a+b+10);
    //},2000);
    console.log("After High-end function");
    
}

function div(a,b,cb)
{
    console.log("This is function from where callback is invoking");

    setTimeout(()=>{

        cb(a/b);
    },3000);
}

sum(p,q,(sumResult)=>{
    console.log("By using arrow function");
    console.log("The result is  "+sumResult);
    div(sumResult,2,(avg)=>{
        console.log("The average is  "+avg);
    })
    },
    (test)=>
    {
        console.log("Test value  "+test);
    },
    (testdata)=>
    {
        console.log("Final value  "+testdata);
    }
);


setTimeout(()=>{
    console.log("Success");
},5000);

