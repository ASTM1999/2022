const bcrypt = require('bcrypt')

const makeHash = async (myText) => {
    const resultPromise = await bcrypt.hash(myText,10)
    return resultPromise
}

const comparaHash = async (testText, myHash) => {
    const resultPromise = await bcrypt.compare(testText, myHash)
    return resultPromise
}

const testText = '523419'

makeHash(testText).then(hash => {
    console.log(hash)

    comparaHash(testText, hash).then(result => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
}).catch(err=>{
    console.log(err)
})
