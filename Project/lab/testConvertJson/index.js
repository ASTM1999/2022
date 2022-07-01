const fs = require('fs')
let filename = "message_1.json";
let filetext = fs.readFileSync(filename, "utf8");
let jsonObj = JSON.parse(filetext);

// console.log(jsonObj);

function decodeFBString(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    return Buffer.from(arr).toString("utf8");
}

function processMessages (messageArray) {
    return messageArray.map(processMessage);
}

function processMessage(message) {
    return Object.keys(message).reduce((obj, key) => {
        obj[key] = (typeof message[key] === "string") ? decodeFBString(message[key]): message[key];
        return obj
    }, {});
}

let messages = processMessages(jsonObj.messages);
// console.log("Input: ", jsonObj.messages);
console.log("Output: ", messages);