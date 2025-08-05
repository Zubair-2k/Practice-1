
const myCallBack=(a)=>{
    console.log("I am Call Back Function")
    console.log(a)
}

const test=(fun,a)=>
{
    fun(a)
}

test(myCallBack,6) 



// function myCallBack(a){
//     console.log("I am Call Back Function")
//     console.log(a)
// }

// function test(fun,a)
// {
//     fun()
// }

// test(myCallBack,6)

