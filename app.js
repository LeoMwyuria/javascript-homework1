//დავალება N1

const myPromise = new Promise((resolve,reject) => {
    let success = Math.floor(Math.random() * 2);
    if (success == 1) {
        resolve('resolved')
    }
    else{
        reject('rejected')
    }
})
myPromise
.then((message) =>{
    console.log(message)
})
.catch((error) =>{
    console.log(error)
})


//დავალება N2

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

//დავალება N3

const firstPromise = new Promise( async (resolve, reject) => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        resolve({  data: data, first_to_resolve: 'firstPromise'});
    } catch (error) {
        reject(error);
    }
});

const  secondPromise = new Promise ( async (resolve, reject) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        resolve({  data: data, first_to_resolve: 'secondPromise' });
    } catch (error) {
        reject(error);
    }
});

Promise.race([firstPromise, secondPromise])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
