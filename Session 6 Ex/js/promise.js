function sum(a,b)
{
    return new Promise((resolve,reject)=>
    {
        const sumResult=a+b;
        
        if(sumResult > 10)
        {
            resolve(sumResult);
        }
        else
        {
            reject("Value must be greater than 10");
        }
    }).then((finaloutput)=>{
        console.log(finaloutput);
        return finaloutput + 30;
    }).then((mydata)=>{
        console.log("Test "+mydata);
        //const dd=mydata/0;
        //return dd;
    }).catch((err)=>{
        console.log("Test Error  "+err);
    })
}

const promise = sum(1,2).then((finaloutput)=>{
    console.log(finaloutput);
})

// const promise1 = sum(1,2);

// promise1.then((finaloutput)=>{
//     console.log(finaloutput);
//     return finaloutput + 30;
// }).then((mydata)=>{
//     console.log("Test "+mydata);
//     const dd=mydata/0;
//     return dd;
// }).catch((err)=>{
//     console.log("Test Error  "+err);
// })