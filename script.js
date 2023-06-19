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
}).then((result) => {
    console.log(result)
    return result * 4;
});

// Output
// 10
// 20
// 60

// Multiple handlers for a promise

let j = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 3 * 1000);
});

j.then((result) => {
    console.log(result)
    return result * 2; // 10
})


j.then((result) => {
    console.log(result)
    return result * 3; // 10
});

j.then((result) => {
    console.log(result)
    return result * 4; // 10
});

// Returning a Promise

let k = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

k.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 3 * 1000);
    });
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 3);
        }, 3 * 1000);
    });
}).then(result => console.log(result));
// Output
// 10
// 20
// 60
