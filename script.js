let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 1000);
});

p.then((result) => {
    console.log(result)
    return result * 2;
}).then((result) =>{
    console.log(result)
    return result * 3;
});

// Output
// 10
// 20
