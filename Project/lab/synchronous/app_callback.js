const myRequest = (message, callback) => {
    console.log('---start request')
    const response = message+' done!!'
    const error = true;
    const result = callback(error, response);
    console.log(result)
    console.log('---end request')
}

const myCallback = (error, res) => {
    if(error) {
        return 'Error '+error;
    }
    else{
        return res;
    }
}

myRequest('Hello world', myCallback);