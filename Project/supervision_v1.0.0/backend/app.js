const expressFunction = require('express')
const mongoose = require('mongoose')
var expressApp = expressFunction()

const url = 'mongodb://localhost:27017/supervision'
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

expressApp.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:27017')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, PATH','DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Authorization')
    return next()
})
expressApp.use(expressFunction.json())
expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connect to Mongoose...')
        next()
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB')
        res.status(501).send('Can not connect to MongoDB')
    })
})

// expressApp.use('/api/products',require('./api/products'))
// expressApp.use('/api/order',require('./api/order'))
// expressApp.use('/api/user',require('./api/user'))
expressApp.use('/user', require('./routes/user'))
expressApp.use('/login', require('./routes/signin'))
// expressApp.use('/api', require('./api/product'))

expressApp.listen(3000, function(){
    console.log('listen on port 3000')
})