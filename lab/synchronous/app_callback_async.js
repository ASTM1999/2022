const myRequest = (message, callback) => {
    console.log('--Start myRequest')
    const response = message+' done!!'
    const error = undefined;
    setTimeout(() =>{
        const result = callback(error, response);
        console.log(result)
    }, 2000);
    console.log('--End myRequest')
}

const myCallback = (error, response) =>{
    if(error){
        return 'Error '+ error;
    }
    else{
        return response;
    }
}
myRequest('Hello world', myCallback);