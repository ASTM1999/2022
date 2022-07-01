const checkAuth = (username, password) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(username == 'Anusorn' && password == '6130381'){
                console.log('--check-auth--')
                resolve({authData: username+password})
            }
            else{
                reject(new Error('Authentication failed'))
            }
        }, 2000)
    })
}

const getStudent = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('--getStudent--')
            const data = {name: 'Anusorn Srirpom', permission:'Admin'}
            resolve(data)
        }, 3000)
    })
}

const getTheResult = async() => {
    const auth = checkAuth('Anusorn', '6130381')
    const data = await getStudent(auth)
    console.log(data);
}

console.log('--Start--')
getTheResult()
console.log('--Finish--')