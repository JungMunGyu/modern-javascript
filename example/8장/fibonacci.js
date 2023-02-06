// function fibonacci(n){
//     if(n<2) return n;
//     if(!(n in fibonacci)){
//         fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
//     }
//     return fibonacci[n];
// }
// for(var i = 0; i <= 20; i++){
//     console.log((" "+i).slice(-2)+":"+fibonacci(i));
// }

//제너레이터로 구현한 fibonacci
function* fibonacci(){
    var fn1 = 0, fn2 = 1;
    while(true){
        var fnew = fn1 + fn2;
        fn1 = fn2;
        fn2 = fnew;
        reset = yield fn1;
        if(reset){
            fn1 = 0; fn2 = 1;
        }
    }
}
var iter = fibonacci();
for (var i = 0; i < 10; i++){
    console.log(iter.next().value);
} 
console.log(iter.next().value); // 89
console.log(iter.next(true).value); // 1
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2