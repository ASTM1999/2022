const jwt = require('jsonwebtoken')

const playload = {
    stdid: 'B6130381',
    name: 'Anusorn Sriprom',
    major: 'CPE'
}

const key = 'MY_KEY'
const token = jwt.sign(playload, key, {expiresIn: 60*5})
console.log(token)

try {
    const dataIntoken = jwt.verify(token, key)
    console.log(dataIntoken)
} catch (err) {
    console.log(err)
}
