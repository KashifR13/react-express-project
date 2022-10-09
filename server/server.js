const express = require('express')
const reactExpressApp = express()

reactExpressApp.get("/friends", (request, response) => {
    
    response.json({
        "friends": ["Arslan", "Miaraj", "Haseeb"]
    })
})

reactExpressApp.listen(5000, () => { console.log("Server started on the port 5000") })