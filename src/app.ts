import {Application, Request, Response} from "express";

const express = require('express')
const app: Application = express()

app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
