'use strict'
const path = require('path')
const express = require('express')
const port=80
const host='0.0.0.0'
const app=express()
const staticDir=path.join(__dirname)
const staticPage=path.join(staticDir, "index.html")

app.use(express.static(staticDir))


app.get('/*', (req, res) => {
  return  res.sendFile(staticPage)

})



app.listen(port, host, () => {
  console.log(`server running @http://${host}:${port}`)
})
