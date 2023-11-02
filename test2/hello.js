/*const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send('fuck you');
});

app.post('/', (req, res)=>{
    res.send('got a post request');
});

app.listen(3000, ()=>{
    console.log('server started');
});*/


function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 10000);
    })
}

/**
 * sampleResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される
 * 今回の場合、2秒後にresolve(10)が返ってきてその後の処理（return result + 5;）が再開される
 * resultにはresolveされた10が格納されているため、result + 5 = 15がreturnされる
 */
async function sample() {
    const result = await sampleResolve(5);
    return result + 5;
}

sample().then(result => {
    console.log(result); // => 15
});
