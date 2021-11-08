const https = require('https')
const options = {
    hostname: 'api.publicapis.org',
    path: '/entries',
    method: 'GET',
}

let body = ''
const req = https.request(options, res => {
    res.on('data', d => {
        body = d.toString()
    })
})

req.end()

console.log(body)



//####now async

// function getApi() {
//     return new Promise((resolve, reject) => {
//         const req = https.request(options, res => {
//             res.on('data', d => {
//                 resolve(d.toString())
//             })
//         })
//         req.end()
//     })
// }

// getApi().then(console.log)
