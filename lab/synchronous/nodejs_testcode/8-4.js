var expressFunction = require('express')
var expressApp = expressFunction()
expressApp.use(expressFunction.json())

const students = [
    {stdid : 'B6130381', name: 'Anusorn Sriprom'},
    {stdid : 'B6123456', name: 'Jaidee Deejai'},
]

expressApp.post('/api/resource/students', function (req,res) {
    const stdid = req.body.stdid
    const name = req.body.name
    if (stdid.length == 8){
        const student = {
            stdid: stdid,
            name: name
        }
        students.push(student)
        res.status(200).send(student)
        console.log("Hello, " + student.name)
    }
    else {
        res.status(404).send('Error cannot add student')
    }
    
})

expressApp.listen(3000, function(){
    console.log('listening on port 3000')
})