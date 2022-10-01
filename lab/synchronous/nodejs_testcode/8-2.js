const expressFunction = require('express')
const expressApp = expressFunction()

const students = [
    {stdid: 'B6130381', name: 'Anusorn Sriprom'},
    {stdid: 'B6123456', name: 'jaidee deejai'},
]

expressApp.get('/api/resource/students/:stdid', function (req, res) {
    const stdid = req.params.stdid
    if (stdid == 'B6130381'){
        res.status(200).send(students[0])
    }
    else if(stdid == 'B6123456'){
        res.status(200).send(students[1])
    }
    else{
        res.status(404).send('Error 404 not found')
    }
})

expressApp.listen(3000, function(){
    console.log('listening on port 3000')
})
