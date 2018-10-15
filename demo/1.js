var j = 100;
// ~ 转换成 表达式
~function test(params) {
    console.log(j);
    
}();

for (var index =0; index < 5 ;index++) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(index +'time'+new Date()));
        }, index * 1000);
    });
}

function loop(i) {
    setTimeout(function timer() {
        console.log(i +'time'+new Date());
    }, i * 1000);
}

for (let index =0; index < 5 ;index++) {
    loop(index);
}

for (var index =0; index < 5 ;index++) {
    (function(i) {
        setTimeout(() => {
            console.log(i +'time'+new Date());
        }, i * 1000);
    })(index)
}

for (var index =1; index < 5 ;index++) {
    setTimeout((i) => {
        console.log(i +'time'+new Date());
    }, index * 1000, index);
}





