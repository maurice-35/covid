import express from 'express'

const app = express()
const port = 4000

app.use((req, _res, next) => {      // req requests info about the body and user, res is an object that responds back the respond in various formats e.g string, json.
	console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
	next()
})



app.listen(port, () => console.log(` 🚀 Express is up and running on port ${port}`))