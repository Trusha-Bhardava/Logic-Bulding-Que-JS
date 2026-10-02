const promise = new Promise ((receive,reject) => {
    let success = true;

    if(success)
    {
        receive("promidse is resolved");
    }
    else
    {
        reject("promise is rejected");
    }
});

promise.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})